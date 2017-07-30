const querystring = require("querystring")
const url = require("url")

module.exports = function(req, res, next){
  const query = url.parse(req.url).query || ""
  req.query = querystring.parse(query, "&")
  next()
}