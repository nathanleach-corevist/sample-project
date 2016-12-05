import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'
import SavedCartsMenu from './SavedCartsMenu'
import UserMenu from '../Accounts/UserMenu'

class Masthead extends Component {
  constructor(props) {
  	super(props)
  	this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props

    return (
      <div className="header__masthead container">
        <Link to='/'>
          <img src="images/headerlogo.png" className="header__brand-icon"/>
        </Link>

        <UserMenu
          isAuthenticated = {isAuthenticated}
          dispatch = {dispatch}
        />

        {isAuthenticated &&
          <div className="u-floatRight">
            <SavedCartsMenu />
          </div>
        }
      </div>
    )
  }
}

Masthead.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}

export default Masthead
