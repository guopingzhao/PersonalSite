webpackJsonp([16],{

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.setCookie = setCookie;
exports.getCookie = getCookie;
exports.getAllCookie = getAllCookie;
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
  var result = void 0;
  var reg = new RegExp(".*" + cname + "=([^;]+).*", "mg");
  document.cookie.replace(reg, function (a, b) {
    return result = b;
  });
  return result;
}

function getAllCookie() {
  var cookieStr = document.cookie;
  return cookieStr.split(";").map(function (v) {
    return v.replace(/^\s/, "").split("=");
  }).reduce(function (x, y) {
    var _y = _slicedToArray(y, 2),
        k = _y[0],
        v = _y[1];

    x[k] = v;
    return x;
  }, {});
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(setCookie, "setCookie", "F:/web/PersonalSite/web/src/libs/util/cookie.js");

  __REACT_HOT_LOADER__.register(getCookie, "getCookie", "F:/web/PersonalSite/web/src/libs/util/cookie.js");

  __REACT_HOT_LOADER__.register(getAllCookie, "getAllCookie", "F:/web/PersonalSite/web/src/libs/util/cookie.js");
}();

;

/***/ })

});