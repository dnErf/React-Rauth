import React from 'react'
import { connect , Provider } from 'react-redux'
import { createStore , applyMiddleware , compose } from 'redux'
import reduxPromise from 'redux-promise'
import thunk from 'redux-thunk'

import reducers from './reducers'
import authActions from './actions/auth'

const initialState = {}
const middleware = [reduxPromise,thunk]
const store = createStore (
  reducers ,
  initialState ,
  compose (
    applyMiddleware(...middleware) ,
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
  ) 
);

export const authConnect = mapStateToProps => connect(mapStateToProps,authActions)
export const contentConnect = mapStateToProps => connect(mapStateToProps,{})

export default ({ children , state={} }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}