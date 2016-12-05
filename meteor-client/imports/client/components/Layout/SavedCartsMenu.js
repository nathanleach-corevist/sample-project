import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class SavedCartsMenu extends Component {
  constructor(props) {
  	super(props)
  	this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    return (
      <span>
        <div aria-label="..." className="user-menu__action btn-group u-floatLeft" role="group">
          <button className="btn btn-secondary" onclick="parent.location='/saved_cart'" type="button">
            Saved Carts
          </button>
          <button className="btn btn-secondary" onclick="parent.location='/cart/shop'" type="button">
            0
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </button>
        </div>
      </span>
    )
  }
}

export default SavedCartsMenu
