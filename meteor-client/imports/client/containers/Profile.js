import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import UserDetails from '../components/Profile/UserDetails'
import PasswordReset from '../components/Profile/PasswordReset'
import { pwResetInputs, pwResetSelect } from './data/ProfileData'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return(
      <div className="profile">
        <UserDetails />
        <PasswordReset inputs={pwResetInputs} select={pwResetSelect}/>
      </div>
    )
  }
}

export default Profile
