import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import api from '../middleware/api'
import rootReducer from '../reducers'
// import DevTools from '../containers/DevTools'

const configureStore = (initialState) => {
  const routerMw = routerMiddleware(browserHistory)
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, routerMw, api, createLogger()),
      // DevTools.instrument()
    )
  )
  return store
}

export default configureStore
