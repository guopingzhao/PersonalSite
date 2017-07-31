const fs = require("fs")
const path = require("path")
const url = require("url")
const systemConfig = require("../config/system")
const staticdir = systemConfig.static || path.resolve(__dirname, "../public")
module.exports = function (req, res, next) {
  const {pathname} = url.parse(req.url)
  if (/^.+\..+$/g.test(pathname)) {
    resFile(res, path.resolve(staticdir, pathname.replace(/^\//, "")))
  } else if (req.url === "/") {
    resFile(res, path.resolve(staticdir, "index.html"))
  } else {
    next()
  }
}

function resFile(res, filePath) {
  console.log(filePath)
  fs.readFile(filePath, (err, data) => {
    if (err) {

    } else {
      res.writeHead(200)
      res.end(data)
    }
  })
}