const url = require("url")
const router = require("./router")
const app = function app (req, res){
  req.urlParser = url.parse(req.url)
  app.req = req
  app.res = res
  let next = false
    let actuator = (function * () {
      for (let func of cute.middlewares) {
        try{
          yield func(req, res, ()=>{
            next = true
          })
        next = false
        } catch(error) {
          app.emit("error", error)
        }
      }
    })()
    for(let a of actuator){
      if(!next) break
    }
}
app.events = new Map()
app.use = function (func, obj) {
  let type = typeof func
  switch(type){
    case "function": 
      cute.middlewares.push(func) 
      break
    case "string":
      cute.middlewares.push((req, res, next)=>{
        let pathname = req.urlParser.pathname,
          method = req.method.toLowerCase()
        if(!pathname.indexOf(func)){
          let route = obj[`${method}Route`].get(pathname.replace(func, ""))
          if(route){
            route(req, res, next)
          } else {
            next()
          }
        } else {
          next()
        }
      })
      break
    case "object": 
      cute.middlewares.push((req, res, next)=>{
        let pathname = req.urlParser.pathname,
          method = req.method.toLowerCase()
        let route = func[`${method}Route`].get(pathname)
        if(route){
          route(req, res, next)
        } else {
          next()
        }
      })
      break
    default: 
      cute.middlewares.push((req, res, next)=>{
        next()
      })
  }
}

app.on = function(name, func){
  app.events.set(name, func)
}

app.emit = function(name, event){
  let func = app.events.get(name)
  if(!func) return
  switch(name){
    case "error":
      func(event, app.req, app.res)
      break
    default:
      func(app.req, app.res, event)
  }
}

const cute = function () {
  return app
}
cute.middlewares = []
cute.router = router

module.exports = cute