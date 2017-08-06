webpackJsonp([23],{

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.cloneChildren = cloneChildren;
exports.cloneElement = cloneElement;

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var map = _react2.default.Children.map,
    clone = _react2.default.cloneElement;
function cloneChildren(children) {
  var appendProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return typeof children === "string" ? children : map(children, function (child) {
    var props = child.props,
        children = child.props.children,
        type = child.type;

    return clone(child, typeof type === "string" ? props : _extends({}, appendProps, props), cloneChildren(children, appendProps));
  });
}

function cloneElement() {}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(clone, "clone", "F:/web/PersonalSite/web/src/libs/components/form/const.js");

  __REACT_HOT_LOADER__.register(map, "map", "F:/web/PersonalSite/web/src/libs/components/form/const.js");

  __REACT_HOT_LOADER__.register(cloneChildren, "cloneChildren", "F:/web/PersonalSite/web/src/libs/components/form/const.js");

  __REACT_HOT_LOADER__.register(cloneElement, "cloneElement", "F:/web/PersonalSite/web/src/libs/components/form/const.js");
}();

;

/***/ })

});