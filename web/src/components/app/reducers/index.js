import {write} from "libs/util/objTool"

import {APP_SET_LOCALE} from "../actions"

const initialState = {
  locale: "zh"
}

const handlers = {
  [APP_SET_LOCALE]: (state, data) => write(state, "locale", data)
}

export default (state=initialState, action) => {
  let {type, data} = action
  if (!handlers[type]) return state
  return handlers[type](state, data)

}