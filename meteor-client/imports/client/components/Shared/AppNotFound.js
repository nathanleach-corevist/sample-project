import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class AppNotFound extends Component {
  constructor(props) {
  	super(props)
  	this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  
  render() {
    return(
      <h4>App Not Found!</h4>
    )
  }
}

export default AppNotFound
