import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class RegisterForm extends Component {

  render() {
    return (
      <form ref="registerForm" className="register-form" onSubmit={this.handleSubmit}>
        <div className="u-highlighted u-alignCenter">Quality Assurance System</div>
        <h2 className="login-form__heading u-alignCenter">
          Registration
        </h2>
        <fieldset className="login-form__fields">
          <input type='text' className='register-form__input-username' name='username' ref='username' tabIndex='1' placeholder='User ID'/>
          <input type='email' className='register-form__input-email' name='email' ref='email' tabIndex='2' placeholder='Email Address'/>
          <input type='password' className='register-form__input-password' name='password' ref='password' tabIndex='3' placeholder='Password'/>
          <input type='password' className='register-form__input-password-confirm' name='passwordConfirm' ref='passwordConfirm' tabIndex='4' placeholder='Password Confirmation'/>
          <Link to='/' className="btn btn-secondary u-floatLeft glyphicon glyphicon-home">
            <span className="fa fa-home"></span>
          </Link>
          <input type="submit" className="register-form__submit btn btn-primary u-floatRight" value="Create an Account" />
        </fieldset>
      </form>
    )
  }

}

export default RegisterForm
