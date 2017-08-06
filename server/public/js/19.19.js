webpackJsonp([19],{

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateIntNumber = generateIntNumber;
function generateIntNumber(g) {
  var l = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var random = Math.random,
      round = Math.round;

  return round(random() * (g - l) + l);
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(generateIntNumber, "generateIntNumber", "F:/web/PersonalSite/web/src/libs/motheds/maths.js");
}();

;

/***/ })

});