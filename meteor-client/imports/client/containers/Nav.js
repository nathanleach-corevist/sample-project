import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { setActiveNav } from '../actions'
import NavLink from '../components/Layout/NavLink'
import { navItems } from './data/NavData'

class Nav extends Component {
  constructor(props) {
  	super(props)
  	this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    const { isAuthenticated, errorMessage, activeLinkPath } = this.props
    const renderSubNav = (subNavItems) => {
      let subNavLinks = subNavItems.map((link, i)=> {
        return (
          <NavLink key={i} link={link} active={activeLinkPath === link.path} onNavClick={path => onClick(path)} subnav={true} />
        )
      })
      return subNavLinks
    }

    const navLinks = navItems.map((link, i) => {
      if(!link.subNav){
        return(
          <NavLink key={i} link={link} active={activeLinkPath === link.path} onNavClick={path => onClick(path)}/>
        )
      } else {
        return (
          <li key={i} role="presentation" className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
              {link.text} <span className="caret"></span>
            </a>
            <div className="dropdown-menu">
              {renderSubNav(link.subNav)}
            </div>
          </li>
        )
      }
    })

    return (
      <nav className="navigation">
        <ul className="nav__link-list nav nav-pills">
          {isAuthenticated &&
            navLinks
          }
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    activeLinkPath: state.routing.locationBeforeTransitions.pathname
  }
}

export default connect(
  mapStateToProps
)(Nav)
