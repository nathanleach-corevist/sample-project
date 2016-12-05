import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'
import classNames from 'classnames'

let navClass = "nav__link-list-item"

class NavLink extends Component {
  constructor(props) {
  	super(props)
  	this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    const { link } = this.props
    const activeClass = classNames({active: window.location.pathname == link.path})
    const linkClass = link.text === "Home" ? `nav-link fa fa-home fa-lg ${activeClass}` : `nav-link ${activeClass}`
    if(this.props.subnav) {
      return (
        <Link key={this.props.key} to={link.path} className={"dropdown-item " + activeClass} title={link.desc}>{link.text}</Link>
      )
    } else {
      return (
        <li key={this.props.key} className="nav-item">
          <Link key={this.props.key} to={link.path} className={linkClass} title={link.desc}>{link.text === 'Home' ? '' : link.text}</Link>
        </li>
      )
    }

  }
}

export default NavLink
