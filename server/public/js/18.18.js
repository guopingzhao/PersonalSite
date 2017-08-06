webpackJsonp([18],{

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trans;

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__(212);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function trans(id) {
  var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var valueMap = values.reduce(function (a, b, i) {
    return Object.assign(a, _defineProperty({}, i, b));
  }, {});
  return _react2.default.createElement(_reactIntl.FormattedMessage, {
    id: id,
    values: valueMap
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(trans, "trans", "F:/web/PersonalSite/web/src/libs/trans.js");
}();

;

/***/ })

});