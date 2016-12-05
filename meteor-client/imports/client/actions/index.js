import { CALL_API, Schemas } from '../middleware/api'
import { push } from 'react-router-redux'
const BASE_URI = 'http://localhost:4000' // DEV
//const BASE_URI = 'http://localhost:4000' // PROD

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

export const SET_PURCHASING_SEARCH_FILTER = 'SET_PURCHASING_SEARCH_OPTIONS_FILTER'
export const SET_INVOICING_SEARCH_FILTER = 'SET_INVOICING_SEARCH_OPTIONS_FILTER'

export const ROLE_REQUEST = 'ROLE_REQUEST'
export const ROLE_SUCCESS = 'ROLE_SUCCESS'
export const ROLE_FAILURE = 'ROLE_FAILURE'

//////////////////////////
// REGISTRATION ACTIONS //
//////////////////////////

function requestRegistration(creds) {
  return {
    type: REGISTER_REQUEST,
    isFetching: true,
    isRegistered: false,
    creds
  }
}
function receiveRegistration(user) {
  return {
    type: REGISTER_SUCCESS,
    isFetching: false,
    isRegistered: true,
    id_token: user.id_token
  }
}
function registrationError(message) {
  return {
    type: REGISTER_FAILURE,
    isFetching: false,
    isRegistered: false,
    message
  }
}

export function registerUser(creds) {
  config = {
    method: 'POST',
    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    body: `username=${creds.username}&password=${creds.password}`
  }

  dispatch => {
    dispatch(requestRegistration(creds))

    return fetch('http://localhost:4000/users', config)
      .then(response =>
        response.json().then(user => ({ user, response}))
      ).then(({ user, response}) => {
          if (!response.ok) {
            //Error
            dispatch(registrationError(user.message))
            return Promise.reject(user)
          } else {
            //Success
            localStorage.setItem('id_token', user.id_token)
            dispatch(receiveRegistration(user))
          }
        }).catch( err => console.log("Registration Error:", err))
  }
}

///////////////////
// LOGIN ACTIONS //
///////////////////

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.auth_token
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function loginUser(creds) {

  config = {
    method: 'POST',
    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    body: `username=${creds.username}&password=${creds.password}`
  }

  return dispatch => {

    dispatch(requestLogin(creds))

    return fetch(`${BASE_URI}/authenticate`, config)
      .then(response =>
        response.json().then(user => ({ user, response }))
          ).then(({ user, response }) => {
      if (!response.ok) {
        dispatch(loginError(user.message))
        return Promise.reject(user)
      } else {
        localStorage.setItem('id_token', user.auth_token)
        dispatch(receiveLogin(user))
      }
    }).catch(err => console.log("Error:", err));
  }
}

////////////////////
// LOGOUT ACTIONS //
////////////////////

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

function recieveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('id_token')
    const resp = dispatch(recieveLogout())

    if(!resp.isAuthenticated) {
      dispatch(push('/'))
    }
  }
}

////////////////////////////
// SEARCH OPTIONS ACTIONS //
////////////////////////////

export const setPurchasingSearchOptionsFilter = (filter) => {
  return {
    type: SET_PURCHASING_SEARCH_FILTER,
    filter
  }
};
export const setInvoicingSearchOptionsFilter = (filter) => {
  return {
    type: SET_INVOICING_SEARCH_FILTER,
    filter
  }
};

///////////////////////
// USER ROLE ACTIONS //
///////////////////////

// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchRoles() {
  return {
    [CALL_API]: {
      types: [ ROLE_REQUEST, ROLE_SUCCESS, ROLE_FAILURE ],
      endpoint: `roles`,
      schema: Schemas.ROLE_ARRAY,
      authenticated: true
    }
  }
}

// Fetches a single repository from Github API unless it is cached.
// Relies on Redux Thunk middleware.
export function loadRoles(name, requiredFields = []) {
  return (dispatch, getState) => {
    const role= getState().entities.role[name]

    if (role && requiredFields.every(key => role.hasOwnProperty(key))) {
      return null
    }

    return dispatch(fetchRoles())
  }
}
