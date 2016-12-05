import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { loginUser } from '../actions'
import LoginForm from '../components/Accounts/LoginForm'

class Login extends Component {
  constructor(props) {
  	super(props)
  	this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    const { isAuthenticated, nextPathname, changeLocationOnSignIn, loginUser } = this.props

    return (
      <div className="col-md-4 col-md-offset-4">
        <LoginForm
          isAuthenticated={isAuthenticated}
          nextPathname={nextPathname}
          changeLocationOnSignIn={nextPathname => changeLocationOnSignIn(nextPathname)}
          loginUser={creds => loginUser(creds)} />
      </div>
    )
  }

}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  nextPathname: state.routing.locationBeforeTransitions.state ? state.routing.locationBeforeTransitions.state.nextPathname : '/login',
})

const mapDispatchToProps = (dispatch) => ({
  loginUser: creds => {
    dispatch(loginUser(creds))
  },
  changeLocationOnSignIn: (nextPathname) => {
    dispatch(push(nextPathname));
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Login)
