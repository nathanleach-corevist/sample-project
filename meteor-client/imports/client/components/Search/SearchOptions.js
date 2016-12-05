import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import classNames from 'classnames'
import Panel from '../Shared/Panel'

class SearchOptions extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  handleClick(e, value) {
    e.preventDefault()
    this.props.onOptionClick(value);
  }

  generateOptions(opts) {
    return opts.map((opt, i)=> {
      const activeClass = classNames({ active: this.props.filter == opt.value })
      return(
        <li key={i} className="nav-item ">
          <a href="#" className={"nav-link " + activeClass} onClick={e => this.handleClick(e, opt.value)}>{opt.name}</a>
        </li>
      )
    })
  }

  render() {
    let opts = this.generateOptions(this.props.options)

    return(
      <div className="search-options">
        <Panel title="Search Options">
          <div className="card-block">
            <ul className="search-options__opt-list nav nav-pills nav-stacked">
              {opts}
            </ul>
          </div>
        </Panel>
      </div>
    )
  }
}

export default SearchOptions
