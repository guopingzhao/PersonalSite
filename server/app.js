const cute = require("./lib/cute")
const path = require("path")
const querystring = require("querystring")
const fileRequest = require("./middleware/fileRequest")
const cookieParser = require("./middleware/cookieParser")
const queryParser = require("./middleware/queryParser")
const bodyParser = require("./middleware/bodyParser")

const app = cute()

app.use(fileRequest)
app.use(cookieParser)
app.use(queryParser)
app.use(bodyParser)
app.use(require("./routes/index"))
app.use((req, res, next)=>{

})
app.on("error", (err, req, res)=>{

})

module.exports = app