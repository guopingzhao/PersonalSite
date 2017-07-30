var cute = require("../lib/cute")
var router = cute.router();

router.get('/test', function(req, res, next) {
  console.log(1111111111)
});

module.exports = router
