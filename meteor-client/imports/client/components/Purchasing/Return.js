import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Return extends Component {
  constructor(props) {
  	super(props)
  	this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  
  render() {
    return(
      <h4>This is where the Return page goes</h4>
    )
  }
}

export default Return
