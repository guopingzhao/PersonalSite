webpackJsonp([20],{

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createBrowserHistory = __webpack_require__(215);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _reactRouterRedux = __webpack_require__(216);

var _store = __webpack_require__(92);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();

var _default = (0, _reactRouterRedux.syncHistoryWithStore)(history, _store2.default);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(history, "history", "F:/web/PersonalSite/web/src/libs/history.js");

  __REACT_HOT_LOADER__.register(_default, "default", "F:/web/PersonalSite/web/src/libs/history.js");
}();

;

/***/ })

});