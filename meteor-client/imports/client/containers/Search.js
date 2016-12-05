import _ from 'lodash'
import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

import { setPurchasingSearchOptionsFilter, setInvoicingSearchOptionsFilter } from '../actions'
import { searchOptions, searchFormInputs } from './data/SearchData'
import SearchOptions from '../components/Search/SearchOptions'
import SearchForm from '../components/Search/SearchForm'

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const { searchType, selectedOpt, setDefaultOption } = this.props
    const typeOpts = searchOptions[this.props.searchType.toUpperCase()]

    return (
      <div className="search">
        <div className="search__search-opts">
          <SearchOptions options={typeOpts} filter={selectedOpt} onOptionClick={filter => setDefaultOption(filter)}/>
        </div>
        <div className="search__search-form">
          <SearchForm criteria={searchFormInputs[selectedOpt]} filter={selectedOpt} searchType={searchType} />
        </div>
      </div>
    )
  }
}

const determineSelectedOpt = (state, path) => {
  switch (path) {
    case '/search/purchasing':
      return state.search.get('purchasingSelectedOpt')
      break
    case '/search/invoicing':
      return state.search.get('invoicingSelectedOpt')
      break
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    searchType: ownProps.params.type,
    selectedOpt: determineSelectedOpt(state, ownProps.location.pathname)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setDefaultOption: (filter) => {
      switch (ownProps.location.pathname) {
        case '/search/purchasing':
          dispatch(setPurchasingSearchOptionsFilter(filter))
          break
        case '/search/invoicing':
          dispatch(setInvoicingSearchOptionsFilter(filter))
          break
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer)
