export function read(obj = {}, pathStr = "", options = {}) {
  const { reduce, defaultValue, isTrue, isArray } = options
  if (Array.isArray(pathStr)) {
    let values = isArray ? [] : {}
    for (let v of pathStr) {
      if (reduce) {
        values[v] = readObj(obj, `${v}`, defaultValue, isTrue)
      } else if (isArray) {
        values.push(readObj(obj, `${v}`, defaultValue, isTrue))
      } else {
        values = write(values, `${v}`, readObj(obj, `${v}`, defaultValue, isTrue))
      }
    }
    return values
  } else {
    return readObj(obj, pathStr, defaultValue, isTrue)
  }
}

export function write(obj = {}, pathStr = "", value, options = {}) {
  const { reduce } = options
  let newObj = obj      
  if (Array.isArray(pathStr)) {
    for (let v of pathStr) {
      newObj = writeObj(newObj, `${v}`, read(value, `${v}`), reduce)
    }
    return newObj
  } else {
    return writeObj(newObj, pathStr, value, reduce)
  }
}

export function del(obj = {}, pathStr = "", options = {}) {
  let newObj = Object.assign(Array.isArray(obj) ? [] : {}, obj)
  if (Array.isArray(pathStr)) {
    let paths = pathStr.map(v => v.split(".")),
      v = newObj
    for (let i = 0, len = paths.length; i < len; i++) {
      v = delOne(v, paths[i], options)
    }
    return v
  } else {
    let pathline = `${pathStr}`.split(".")
    return delOne(newObj, pathline, options)
  }
}

export function getPath(obj, key) {
  let regex = new RegExp(`\.?${key}$`)
  return getAllPath(obj, key).find(v => regex.test(v))
}

export function assign(...objs) {
  let newObj
  for (let v of objs) {
    newObj = write(newObj, getAllPath(v), v)
  }
  return newObj
}

function readObj(obj = {}, pathStr, defaultValue, isTrue) {
  if (obj[pathStr]) return obj[pathStr]
  let pathline = pathStr.split(".")
  let value = obj[pathline.shift()],
    isKey = false
  for (let i = 0, len = pathline.length; i < len; i++) {
    if (value) {
      if (value.hasOwnProperty) {
        isKey = value.hasOwnProperty(pathline[i])
      }
      value = value[pathline[i]]
    } else {
      return defaultValue || value
    }
  }
  if (isTrue) {
    return value || defaultValue
  }
  return !value && !isKey ? defaultValue : value
}

function writeObj(obj, pathStr, value, reduce) {
  let pathline = pathStr.split("."),
    newObj = Object.assign(
			obj
				? Array.isArray(obj) ? [] : {}
				: /^\d*$/.test(pathline[0]) ? [] : {}
			,
			obj
		)
  if (newObj[pathStr] || reduce) {
    newObj[pathStr] = value
    return newObj
  }

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

function delOne(obj, pathAry, options) {
  let newObj = Object.assign(Array.isArray(obj) ? [] : {}, obj),
    {
			isFill = false,
			fillValue
		} = options,
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
    if (v[pathAry[len]]) {
      if (isFill) {
        v.splice(pathAry[len], 1, fillValue)

      } else {
        v.splice(pathAry[len], 1)
      }
    }
  } else if (isFill) {
    delete v[pathAry[len]]

  } else {
    v[pathAry[len]] = fillValue
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
    } else if (typeof v === "object") {
      childKey = `${getAllPath(v, key, `${parentKey}${k}.`)}`
    } else {
      childKey = `${parentKey}${k}`
    }
    if (childKey) keyPath.push(childKey)
  }

  if (!isfor) {
    keyPath.push(`${parentKey}`.replace(/\.$/, ""))
  }

  return keyPath.join().split(",").filter(v => v)
}