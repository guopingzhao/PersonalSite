import update from "immutability-helper"
import {MUSIC_LIST} from "../actions"
const initialState = {
  list: []
}

const handlers = {
  [MUSIC_LIST]: (state, data)=>{
    return update(state,{
      $set: {
        list: data
      }
    })
  }
}

export default (state=initialState, action)=>{
  let {type, data} = action
  if(!handlers[type]) return state
  return handlers[type](state, data)
  
}