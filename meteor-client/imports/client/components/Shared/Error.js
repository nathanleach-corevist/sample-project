import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Error extends Component {
  constructor(props) {
  	super(props)
  	this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    return (
      <div key={this.props.error._id} className="error__item alert alert-danger" role="alert">
        <span className="fa fa-exclamation-circle" aria-hidden="true"> </span>
        <span className="sr-only">Error:</span>
        {this.props.error.message}
      </div>
    )
  }
}

export default Error
