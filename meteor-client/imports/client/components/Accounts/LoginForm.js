import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import Utils from '../../utils'

class LoginForm extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(){
    const { changeLocationOnSignIn, isAuthenticated, nextPathname } = this.props

    if (isAuthenticated) {
      changeLocationOnSignIn(nextPathname);
    }
  }

  forEachField(callback) {
    let fields = ['username', 'password'];
    let form = ReactDOM.findDOMNode(this.refs.loginForm);
    fields.forEach((field) => {
      let val = form.querySelector('[name="'+field+'"]').value;
      callback(field, val ? Utils.trimInput(val) : null);
    });
  }
  //
  // isValid(){
  //   let fields = ['username', 'password'];
  //   let errors = {};
  //
  //   this.forEachField((field, value) => {
  //     if (field === 'username' && !Utils.usernameIsValid(value)) {
  //       errors[field] = "Username must be at lease 3 characters.";
  //     }
  //     if (field === 'password' && !Utils.passwordIsValid(value)) {
  //       errors[field] = "Enter a valid password.";
  //     }
  //     if (!value) {
  //       errors[field] = "Fields indicated in red are mandatory.";
  //     }
  //   });
  //
  //   this.setState({errors: errors});
  //
  //   let isValid = true;
  //   for (var error in errors) {
  //     isValid = false;
  //     break;
  //   }
  //
  //   return isValid;
  // }

  handleClick(e) {
    e.preventDefault()
    const { loginUser } = this.props
    const form = ReactDOM.findDOMNode(this.refs.loginForm)
    const username = ReactDOM.findDOMNode(this.refs.username).value
    const password = ReactDOM.findDOMNode(this.refs.password).value
    const creds = {username: username.trim(), password: password.trim() }

    loginUser(creds)

    // Trim and validate your fields here....
    // username= Utils.trimInput(username)
    // password = Utils.trimInput(password)

    // If validation passes, supply the appropriate fields to the
    // Meteor.loginWithPassword() function.
    // if(this.isValid()) {
    //   Meteor.loginWithPassword(username, password, function(err){
    //     if (err){
    //       // The user might not have been found, or their passwword
    //       // could be incorrect. Inform the user that their
    //       // login attempt has failed.
    //       console.log("ERROR:", err);
    //       throwError(err.reason)
    //     } else {
    //       // The user has been logged in.
    //
    //     }
    //   });
    // }
  }

  render() {
    return (
      <form ref="loginForm" acceptCharset="UTF-8" className="login-form" id="login-with-enter" method="post" name="login-with-enter">
        <div className="u-highlighted u-alignCenter">Quality Assurance System</div>
        <h2 className="login-form__heading u-alignCenter">
          Please Log In
        </h2>
        <fieldset className="login-form__fields">
          <input type='text' className='login-form__username' name='username' ref='username' tabIndex='1' placeholder='User ID'/>
          <input type='password' className='login-form__password' name='password' ref='password' tabIndex='2' placeholder='Password'/>
        </fieldset>
        <fieldset>
          <button
            type="button"
            title="Log in to the Application"
            className="login-form__submit btn btn-primary u-floatRight"
            onClick={(e) => this.handleClick(e)}>Login</button>
        </fieldset>
        <div className="login-form__help-wrapper">
          <span className="login-form__help-title">Help:</span>
          <div className="login-form__help">
            <div className="login-form__help-link">
              <Link to='/recover-password'>Forgot your Password?</Link>
            </div>
            <div className="help_link">
              <Link to='/register'>Don't have an account? Request one now.</Link>
            </div>
          </div>
        </div>
      </form>
    )
  }

}

export default LoginForm
