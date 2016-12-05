import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Masthead from '../components/Layout/Masthead'
import Nav from './Nav'
import Footer from '../components/Layout/Footer'

class App extends Component {
  constructor(props) {
  	super(props)
  	this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {

    const { dispatch, isAuthenticated, errorMessage, children } = this.props

    return (
      <span>
        <Masthead
          isAuthenticated = {isAuthenticated}
          errorMessage = {errorMessage}
          dispatch = {dispatch}
        />
        <Nav
          isAuthenticated = {isAuthenticated}
        />
        <div className="page">
          {children}
        </div>
        <Footer/>
      </span>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}

const mapStateToProps = (state) => {
  const { auth } = state
  const { isAuthenticated, errorMessage } = auth

  return {
    isAuthenticated,
    errorMessage
  }
  // return {
  //   inputValue: ownProps.location.pathname.substring(1)
  // }
}

export default connect(mapStateToProps)(App)
