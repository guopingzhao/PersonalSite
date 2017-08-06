webpackJsonp([13,19],{

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

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateRandomColors = generateRandomColors;

var _maths = __webpack_require__(206);

function generateRandomColors() {
  var colors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var _colors$r = colors.r,
      r = _colors$r === undefined ? {} : _colors$r,
      _colors$g = colors.g,
      g = _colors$g === undefined ? {} : _colors$g,
      _colors$b = colors.b,
      b = _colors$b === undefined ? {} : _colors$b,
      _r$rl = r.rl,
      rl = _r$rl === undefined ? 0 : _r$rl,
      _r$rg = r.rg,
      rg = _r$rg === undefined ? 255 : _r$rg,
      _g$gl = g.gl,
      gl = _g$gl === undefined ? 0 : _g$gl,
      _g$gg = g.gg,
      gg = _g$gg === undefined ? 255 : _g$gg,
      _b$bl = b.bl,
      bl = _b$bl === undefined ? 0 : _b$bl,
      _b$bg = b.bg,
      bg = _b$bg === undefined ? 255 : _b$bg;

  return "rgba(" + (0, _maths.generateIntNumber)(rg, rl) + "," + (0, _maths.generateIntNumber)(gg, gl) + "," + (0, _maths.generateIntNumber)(bg, bl) + "," + a + ")";
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(generateRandomColors, "generateRandomColors", "F:/web/PersonalSite/web/src/libs/motheds/colors.js");
}();

;

/***/ })

});