import React, { Component, PropTypes } from 'react'

class Logout extends Component {
  handleClick(e) {
    const { onLogoutClick } = this.props
    e.preventDefault()
    onLogoutClick()

  }

  render() {
    return (
      <a onClick={e => this.handleClick(e)} className="dropdown-item">
        Logout
      </a>
    )
  }

}

Logout.propTypes = {
  onLogoutClick: PropTypes.func.isRequired
}

export default Logout
