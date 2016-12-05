import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { loginUser, logoutUser } from '../../actions'
import Login from './Login'
import Logout from './Logout'

class UserMenu extends Component {

  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props

    return (
      <span className="user-menu u-floatRight">
        {isAuthenticated &&
          <div className="user-menu__action dropdown u-floatLeft">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <i className="fa fa-user"></i>
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><Link to='profile' className="dropdown-item">Profile</Link></li>
              <li><Link to='help' className="dropdown-item">Help</Link></li>
              <li>
                <Logout
                  onLogoutClick = { () => dispatch(logoutUser()) }
                />
              </li>
            </ul>
          </div>
        }
      </span>
    )
  }

}

UserMenu.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}

export default UserMenu
