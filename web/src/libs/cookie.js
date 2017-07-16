export function setCookie(cname, cvalue, exdays) {
  let d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  let expires = `expires=${  d.toGMTString()}`
  document.cookie = `${cname  }=${  cvalue  }; ${  expires}`
}

export function getCookie(cname) {
  let result
  let reg = new RegExp(`.*${cname}=([^;]+).*`, "mg")
  document.cookie.replace(reg, (a, b, c) => result = b)
  return result
}

export function getAllCookie() {
  let cookieStr = document.cookie
  return cookieStr.split(";")
    .map((v) => v.replace(/^\s/, "").split("="))
    .reduce((x, y) => {
      let [k, v] = y
      x[k] = v
      return x
    }, {})
}