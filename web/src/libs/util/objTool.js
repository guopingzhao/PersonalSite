export function read(obj = {}, pathStr = "", options = {}) {
  const { reduce, defaultValue, isTrue, isArray } = options
  if (Array.isArray(pathStr)) {
    let values = isArray ? [] : {}
    for (let v of Object.entries(pathStr)) {
      if (reduce) {
        values[v] = readObj(obj, pathStr, defaultValue, isTrue)
      } else if(isArray) {
        values.push(readObj(obj, pathStr, defaultValue, isTrue))
      } else {
        wirte(values, `${v}`, readObj(obj, pathStr, defaultValue, isTrue))        
      }
    }
    return values
  } else {
    return readObj(obj, pathStr, defaultValue, isTrue)
  }
}

export function wirte(obj = {}, pathStr = "", value, reduce) {
  let newObj = Object.assign(
    obj
      ? Array.isArray(obj) ? [] : {}
      : /^\d*$/.test(pathline[0]) ? [] : {}
    ,
    obj
  )
  if (Array.isArray(pathStr)) {
    for (let v of Object.entries(pathStr)) {
      newObj = wirteObj(newObj, `${v}`, read(value, `${v}`), reduce)
    }
    return newObj
  } else {
    return wirteObj(newObj, pathStr, value, reduce)
  }
}

export function del(obj = {}, pathStr = "") {
  let newObj = Object.assign(Array.isArray(obj) ? [] : {}, obj)
  if (Array.isArray(pathStr)) {
    let paths = pathStr.map(v => v.split(".")),
      v = newObj
    for (let i = 0, len = paths.length; i < len; i++) {
      v = delOne(v, paths[i])
    }
    return v
  } else {
    let pathline = `${pathStr}`.split(".")
    return delOne(newObj, pathline)
  }
}

export function getPath(obj, key) {
  let regex = new RegExp(`\.?${key}$`)
  return getAllPath(obj, key).find(v => regex.test(v))
}

export function assign(...objs){
  let newObj
  for(let v of objs){
    newObj = wirte(newObj, getAllPath(v), v) 
  }
  return newObj
}

function readObj(obj = {}, pathStr, defaultValue, isTrue) {
  if (obj[pathStr]) return obj[pathStr]
  let pathline = pathStr.split(".")
  let value = obj[path.shift()],
    isKey = false
  for (let i = 0, len = pathline.length; i < len; i++) {
    if (value) {
      if (value.hasOwnProperty) {
        isKey = value.hasOwnProperty(path[i])
      }
      value = value[path[i]]
    } else {
      return defaultValue || value
    }
  }
  if (isTrue) {
    return value || defaultValue
  }
  return isKey ? value : defaultValue
}

function wirteObj(newObj, pathStr, value, reduce) {
  if (newObj[pathStr] || reduce) {
    newObj[pathStr] = value
    return newObj
  }
  let pathline = pathStr.split(".")
  let v = newObj,
    len = pathline.length - 1
  for (let i = 0; i < len; i++) {
    if (v) {
      if (v[pathline[i]]) {
        v = v[pathline[i]]
      } else {
        v[pathline[i]] = /^\d*$/.test(pathline[i + 1]) ? [] : {}
        v = v[pathline[i]]
      }
    }
  }
  v[pathline[len]] = value
  return newObj
}

function delOne(obj, pathAry) {
  let newObj = Object.assign(Array.isArray(obj) ? [] : {}, obj),
    v = newObj,
    len = pathAry.length - 1
  for (let i = 0; i < len; i++) {
    if (v) {
      if (/object/ig.test(typeof v[pathAry[i]])) {
        v = v[pathAry[i]]
      } else {
        return newObj
      }
    }
  }
  if (Array.isArray(v)) {
    if (v[pathAry[len]])
      v.splice(pathAry[len], 1, undefined)
  } else {
    delete v[pathAry[len]]
  }
  return newObj
}

function getAllPath(obj, key, parentKey = "") {
  let newObj = Object.assign(Array.isArray(obj) ? [] : {}, obj),
    keyPath = [],
    isfor = false
  for (let [k, v] of Object.entries(newObj)) {
    isfor = true
    let childKey
    if (k === key) {
      childKey = `${parentKey}${k}`
    } else {
      if (typeof v === "object") {
        childKey = `${getAllPath(v, key, `${parentKey}${k}.`)}`
      } else {
        childKey = `${parentKey}${k}`
      }
    }
    if (childKey) keyPath.push(childKey)

  }
  if (!isfor) {
    keyPath.push(`${parentKey}`.replace(/\.$/, ""))
  }
  return keyPath.join().split(",")
}