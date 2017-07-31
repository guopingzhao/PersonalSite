const querystring = require("querystring")

module.exports = function(req, res, next){
  if(req.method.toLowerCase() === "post"){
    let body = ""
    req.on("data", (chunk)=>{
      body += chunk
    })
    req.on("end", ()=>{
      req.body = querystring.parse(body)
      next()
    })
  } else {
    next()
  }
}