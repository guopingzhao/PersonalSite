var express = require('express');
var router = express.Router();

/* GET users listing. */
const o = {
  a:[1,2,3],
  b:[4,5,6],
  c:[7,8,9]
}
router.get('/a', function(req, res, next) {
  res.send([
    "a",
    "b",
    "c"
  ]);
});
router.get('/b/:c', function(req, res, next) {
  res.send(o[req.params.c]);
});
module.exports = router;
