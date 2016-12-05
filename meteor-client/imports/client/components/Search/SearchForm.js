import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Panel from '../Shared/Panel'
import Select from '../Forms/Select'

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  clearForm(e, form) {
    e.preventDefault()
    form.reset()
  }

  renderInputContent(inputOpts) {
    if(inputOpts.popup){
      return(
        <fieldset className="form-group search-form__primary-input">
          <label className="control-label">
            {inputOpts.label}
          </label>
          <div className="input-group">
            <input className="form-control" id={inputOpts.value + "_number"} maxLength="10" name={inputOpts.value + "_number"} type="text" />
            <span className="input-group-btn">
              <a href="#" className="btn btn-secondary" onclick="new Lightbox.base('sold-to-search-popup', {returnField : 'sold_to_number'}); return false;">
                <i className="fa fa-search" aria-hidden="true"></i>
              </a>
            </span>
          </div>
        </fieldset>
      )
    } else {
      return(
        <fieldset className="form-group search-form__primary-input">
          <label className="control-label">
            {inputOpts.label}
          </label>
          <input className="form-control" id={inputOpts.value + "_number"} maxLength="10" name={inputOpts.value + "_number"} type="text" />
        </fieldset>
      )
    }
  }

  renderSearchDateContent(opts) {
    return(
      <div className="clearfix">
        <div className="search-date-range">
          <Select className="c-select form-control" options={opts} text="Time Span" />
        </div>

        <div className="date-range-or">
        or
        </div>

        <fieldset id="daterange-wrapper" className="form-group search-date-from-to">
          <label className="control-label">Date Range:</label>
          <div className="input-daterange input-group" id="datepicker">
            <input type="text" className="input form-control" name="start" />
            <span className="input-group-addon">to</span>
            <input type="text" className="input form-control" name="end" />
          </div>
        </fieldset>
      </div>
    )
  }

  renderShipStatusContent(opts) {
    return(
      <Select className="c-select form-control" text="Ship Status" options={opts} />
    )
  }

  renderItemDataContent() {
    return(
      <div className="checkbox">
        <input id="item_list_displayed" name="item_list_displayed" type="hidden" value="1" />
        <label>
          <input id="item_list" name="item_list" type="checkbox" value="1" />
          With Item Data
        </label>
      </div>
    )
  }

  render() {
    const { criteria, filter, searchType } = this.props
    const typeCondensed = searchType.split('-').join("")

    let authToken;
    let searchInput = this.renderInputContent(criteria.input);
    let searchDate = criteria.date ? this.renderSearchDateContent(criteria.date) : false
    let shipStatus = criteria.shipStatus ? this.renderShipStatusContent(criteria.shipStatus) : false
    let itemData = criteria.itemData ? this.renderItemDataContent() : false

    return(
      <div className="search-form">
        <Panel title="Search Criteria">
          <div className="card-block">
            <form acceptCharset="UTF-8" action={"search_for_"+typeCondensed} className="form clearfix" id={searchType + "-lookup-with-enter"} method="post" name={searchType + "-lookup-with-enter"}>
              <input name="utf8" type="hidden" value="✓" />
              <input name="authenticity_token" type="hidden" value={authToken} />
              <input id="search_option" name="search_option" type="hidden" value={filter.toLowerCase()} />

              {(() => {
                if (criteria.desc) {
                  return <p>{criteria.desc}</p>
                }
              })()}

              {searchInput}

              {(() => {
                if (criteria.secondInput) {
                  return this.renderInputContent(criteria.secondInput.input)
                }
              })()}

              {searchDate}
              <div className="search-from__ship-status">
                {shipStatus}
              </div>
              <div className="search-from__item-data">
                {itemData}
              </div>
              <div className="buttons buttons-search btn-group u-floatRight">
                <a href="#" className="btn btn-secondary" onClick={(e) => clearForm(e, document.getElementById(searchType + "-lookup-with-enter"))}>Reset</a>
                <a className="btn btn-primary" href="#" id="searchbutton" onclick="this.onclick=''; submitFormWithSpinner('sales-doc-lookup-with-enter'); return false;" title="Search for Sales Documents">Search</a>
              </div>
            </form>
          </div>
        </Panel>
      </div>
    )
  }
}

SearchForm.propTypes = {
  criteria: PropTypes.object.isRequired
}

export default SearchForm
