import { Map } from 'immutable'
import * as ActionTypes from '../actions'
import merge from 'lodash/merge'

// Updates an entity cache in response to any action with response.entities.
function entities(state = { users: {}, role: {} }, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }
  return state
}

// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
  const { type, error } = action

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return action.error
  }

  return state
}

export default entities
