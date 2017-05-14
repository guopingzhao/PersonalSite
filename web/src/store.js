import {createStore, combineReducers, compose, applyMiddleware} from "redux"
import createSagaMiddleware from 'redux-saga'
import {routerReducer} from "react-router-redux"

import * as sages from "sages"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    routerReducer
  }),
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)



export const dispatch = store.dispatch.bind(store)
export default store
