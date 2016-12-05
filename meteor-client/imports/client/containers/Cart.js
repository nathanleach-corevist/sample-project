import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Cart extends Component {
  constructor(props) {
  	super(props)
  	this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  
  render() {
    return(
      <h4>This is where the Cart page goes</h4>
    )
  }
}

export default Cart
