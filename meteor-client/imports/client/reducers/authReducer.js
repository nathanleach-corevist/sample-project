import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS
} from '../actions'

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. We also
// want a util to check if the token is expired.
function authReducer(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false
  }, action) {

  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: ''
      })
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      })
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      })
    default:
      return state
  }
}

export default authReducer
