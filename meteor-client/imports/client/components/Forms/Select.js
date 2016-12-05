import _ from 'lodash'
import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Select extends Component {
  constructor(props) {
  	super(props)
  	this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    const options = _.map(this.props.options, (option, i) => {
      return <option key={i} value={option.value}>{option.text}</option>
    })
    return(
      <fieldset className={"form-group " + this.props.boxSize}>
        <label>{this.props.text}</label>
        <select
          {...this.props}
          name="">
          {options}
        </select>
      </fieldset>
    )
  }
}

export default Select
