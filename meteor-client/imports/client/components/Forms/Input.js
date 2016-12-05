import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import classNames from 'classnames'

import Icon from '../Shared/Icon'
import InputError from './InputError'

class Input extends Component {
  constructor(props) {
  	super(props)
  	this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  getFormattedInput() {
   switch (this.props.type) {
    case "text":

      return (
        <span>
          <label className="input_label" htmlFor={this.props.text}>{this.props.text}:</label>
          <input {...this.props} placeholder={this.props.placeholder} className="form-control" id={this.props.text} autoComplete="off" />
        </span>
      )
    case "checkbox":
      const id = (this.props.text.toLowerCase().replace(/me/g, "user")).replace(/ /g, "_");
      return (
        <label>
          <input {...this.props} id={id} name={id} />
          {this.props.text}
        </label>
      )
    case "submit": return <input {...this.props} className="btn btn-secondary" id={this.props.text} value={this.props.text} />
   }
  }

  render() {
    const inputGroupClasses = classNames({
      'form-group':     this.props.type === "text" || this.props.type === "checkbox",
      'checkbox':       this.props.type === "checkbox",
      // 'input_valid':     this.state.valid,
      // 'input_error':     !this.state.valid,
      // 'input_empty':     this.state.empty,
      // 'input_hasValue':  !this.state.empty,
      // 'input_focused':   this.state.focus,
      // 'input_unfocused': !this.state.focus
    })
    const processedInput = this.getFormattedInput(this.props)

    return(
      <fieldset className={inputGroupClasses}>
        {processedInput}
      </fieldset>
    )
  }
}

Input.propTypes = {
  text: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired
}

export default Input
