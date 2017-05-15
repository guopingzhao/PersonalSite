import update from "immutability-helper"
import { SET_LOCALE } from "app/actions"

const initialState = {
  locale: null,
}

const handlers = {
  [SET_LOCALE](state, { locale }) {
    if (locale === "en") {
      return update(state, {
        locale: { $set: locale },
      })
    } else {
      return update(state, {
        locale: { $set: locale },
      })
    }
  },
}

export default function app(state = initialState, action) {
  const type = action.type
  if (!handlers[type]) return state
  return handlers[type](state, action)
}
