import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import {reducer as formReducer} from 'redux-form'
import auth from './authReducer'
import search from './searchReducer'
import entities from './adminReducer'

const rootReducer = combineReducers({
  entities,
  auth,
  form: formReducer,
  search,
  routing
});

export default rootReducer
