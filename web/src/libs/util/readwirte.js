export function read(obj = {}, pathStr = "", defaultValue, isTrue) {
  let path = pathStr.split(".")
  let value = obj[path.shift()]
  for (let i = 0, len = path.length; i < len; i++) {
    if (value) {
      value = value[path[i]]
    } else {
      return defaultValue || value
    }
  }
  if (isTrue) {
    return value || defaultValue
  }
  return value !== undefined ? value : defaultValue
}

export function wirte(obj = {}, pathStr = "", value) {
  let newObj = Object.assign(Array.isArray(obj) ? [] : {}, obj)
  let path = pathStr.split(".")
  let v = newObj
  for (let i = 0, len = path.length - 1; i < len; i++) {
    if (v) {
      if (v[path[i]]) {
        v = v[path[i]]
      } else {
        v[path[i]] = /^\d*$/.test(path[i + 1]) ? [] : {}
        v = v[path[i]]
      }
    }
  }
  v[path.pop()] = value
  return newObj
}

export function del(obj = {}, pathStr = "") {
  let newObj = Object.assign(Array.isArray(obj) ? [] : {}, obj)
  let path = pathStr.split(".")
  let v = newObj
  for (let i = 0, len = path.length - 1; i < len; i++) {
    if (v) {
      if (/object/ig.test(typeof v[path[i]])) {
        v = v[path[i]]
      } else {
        return newObj
      }
    }
  }
  if (Array.isArray(v)) {
    v.splice(path.pop(), 1)
  } else {
    delete v[path.pop()]
  }
  return newObj
}