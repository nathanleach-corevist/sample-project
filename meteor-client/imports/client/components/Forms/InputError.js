import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import classNames from 'classnames'

class InputError extends Component {
  constructor(props) {
  	super(props)
  	this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  
  render() {
    const errorClass = ({
      'error_container':   true,
      'visible':           this.props.visible,
      'invisible':         !this.props.visible
    })

    return(
      <div className={errorClass}>
        <span>{this.props.errorMessage}</span>
      </div>
    )
  }
}

export default InputError
