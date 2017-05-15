import i18n from "i18n-js"

export const SET_LOCALE = "APP_SET_LOCALE"

const locales = {
  en: () => import("libs/langs/en"),
  zh: () => import("libs/langs/zh"),
}

export function setLocale(locale) {
  return {
    type: SET_LOCALE,
    locale,
  }
}

export function changeLang(locale) {
  return async dispatch => {
    if (!i18n.translations[locale]) {
      i18n.translations[locale] = await locales[locale]()
    }
  }
}
