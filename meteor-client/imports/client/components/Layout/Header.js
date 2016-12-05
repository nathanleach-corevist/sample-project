import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Masthead from './Masthead'
import Nav from '../../containers/Nav'

class Header extends Component {
  constructor(props) {
  	super(props)
  	this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    const { isAuthenticated } = this.props
    console.log("AUTH", isAuthenticated);


    return (
      <header className='header'>
        <Masthead />
      </header>
    )
  }
}

export default Header
