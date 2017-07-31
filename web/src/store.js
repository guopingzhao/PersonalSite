import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import {routerReducer} from "react-router-redux"

import app from "components/app/reducers"

const store = createStore(
  combineReducers({
      routerReducer,
      app
  }),
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
)

export const dispatch = store.dispatch.bind(store)

export default store
