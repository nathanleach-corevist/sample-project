import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Login from './containers/Login'
import Dashboard from './containers/Dashboard'
import SearchContainer from './containers/Search'
import Cart from './containers/Cart'
import Maintenance from './containers/Maintenance'
import Profile from './containers/Profile'
import Help from './containers/Help'

import LoginForm from './components/Accounts/LoginForm'
import Logout from './components/Accounts/Logout'
import RegisterForm from './components/Accounts/RegisterForm'
import PasswordRecovery from './components/Accounts/PasswordRecovery'
import ChangeOrder from './components/Purchasing/ChangeOrder'
import Quotes from './components/Purchasing/Quotes'
import Return from './components/Purchasing/Return'
import OpenItems from './components/Invoicing/OpenItems'
import Payments from './components/Search/Payments'
import Pay from './components/Invoicing/Pay'
import Monitoring from './components/Admin/Monitoring'
import Proxy from './components/Admin/Proxy'

const requireAuth = store => (
  ( nextState, replace ) => {

    if ( !store.getState().auth.isAuthenticated ) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      })
    }
  }
)

export default store => (
  <Route path='/' component={App}>
    <IndexRoute component={Dashboard} onEnter={requireAuth(store)} />
    <Route component={Login}>
      <Route path='login' component={LoginForm}/>
    </Route>
    <Route path='register' component={RegisterForm}/>
    <Route path='recover-password' component={PasswordRecovery}/>
    <Route onEnter={requireAuth(store)}>
      <Route path='dashboard' component={Dashboard} />
      <Route path='search/:type' component={SearchContainer}/>
      <Route path='cart' component={Cart}/>
      <Route path='change-order' component={ChangeOrder}/>
      <Route path='quotes' component={Quotes}/>
      <Route path='return' component={Return}/>
      <Route path='open-items' component={OpenItems}/>
      <Route path='pay' component={Pay}/>
      <Route path='payments' component={Payments}/>
      <Route path='maintenance/:type' component={Maintenance}/>
      <Route path='monitoring' component={Monitoring}/>
      <Route path='proxy' component={Proxy}/>
      <Route path='profile' component={Profile}/>
      <Route path='help' component={Help}/>
    </Route>
  </Route>
)
