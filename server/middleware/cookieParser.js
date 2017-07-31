const querystring = require("querystring")

module.exports = function(req, res, next){
  const cookie = req.headers.cookie || ""
  req.cookie = querystring.parse(cookie, ";")
  next()
}