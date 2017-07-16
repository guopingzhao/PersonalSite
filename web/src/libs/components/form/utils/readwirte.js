export function read(obj={}, pathStr="", options={}) {
  const {reduce, defaultValue, isTrue} = options
  if(Array.isArray(pathStr)){
    let values = {}
    for(let v of Object.entries(pathStr)){
      if(reduce){
        values[v] = readObj(obj, pathStr, defaultValue, isTrue)
      } else {
        wirte(values, `${v}`, readObj(obj, pathStr, defaultValue, isTrue))
      }
    }
    return values
  } else {
    return readObj(obj, pathStr, defaultValue, isTrue)
  }
}

function readObj(obj={}, pathStr, defaultValue, isTrue) {
  if(obj[pathStr]) return obj[pathStr]
  let path = pathStr.split(".")
  let value = obj[path.shift()],
    isKey = false
  for (let i = 0, len = path.length; i < len; i++) {
    if (value) {
      if(value.hasOwnProperty){
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

export function wirte(obj={}, pathStr="", value, reduce) {
  let newObj = Object.assign({}, obj)
  if(Array.isArray(pathStr)){
    for(let v of Object.entries(pathStr)){
      newObj = wirteObj(newObj, `${v}`, read(value, `${v}`), reduce)
    }
    return newObj
  } else {
    return wirteObj(newObj, pathStr, value, reduce)
  }
}

function wirteObj(newObj, pathStr, value, reduce) {
  if(newObj[pathStr] || reduce) {
    newObj[pathStr] = value
    return newObj
  }
  let path = pathStr.split(".")
  let v = newObj
  for (let i = 0, len = path.length-1; i < len; i++) {
    if (v) {
      if (v[path[i]]) {
        v = v[path[i]]
      } else {
        v[path[i]] = /^\d*$/.test(path[i+1]) ? [] : {}
        v = v[path[i]]
      }
    }
  }
  v[path.pop()] = value
  return newObj
}