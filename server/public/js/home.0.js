webpackJsonp([0],{

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

// import Music from "libs/components/music-player"


var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(80);

var _reactRedux = __webpack_require__(124);

var _trans = __webpack_require__(443);

var _trans2 = _interopRequireDefault(_trans);

var _item = __webpack_require__(445);

var _item2 = _interopRequireDefault(_item);

__webpack_require__(450);

var _const = __webpack_require__(451);

var _maths = __webpack_require__(444);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = (_dec = (0, _reactRedux.connect)(function () {
  return {};
}, function (dispatch) {
  return (0, _redux.bindActionCreators)({}, dispatch);
}), _dec(_class = function (_PureComponent) {
  _inherits(Home, _PureComponent);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      bg: _this.getBgImg(),
      clientWidth: _const.clientWidth,
      clientHeight: _const.clientHeight,
      items: []
    }, _this.calculate = function () {
      var _this$state = _this.state,
          clientHeight = _this$state.clientHeight,
          clientWidth = _this$state.clientWidth;

      var rowNum = Math.floor(clientHeight / 90),
          colNum = Math.floor(clientWidth / 90),
          height = (clientHeight - rowNum) / rowNum,
          width = (clientWidth - colNum) / colNum;

      return {
        height: height,
        width: width,
        rowNum: rowNum,
        colNum: colNum
      };
    }, _this.getPosition = function (num) {
      var positions = new Set();

      while (positions.size < _const.menus.length) {
        positions.add((0, _maths.generateIntNumber)(num));
      }

      return Array.from(positions);
    }, _this.updateBg = function () {
      _this.setState({
        bg: _this.getBgImg()
      });
    }, _this.upsetMenus = function () {
      _this.renderItems();
    }, _this.setrow = function () {
      var positions = _const.menus.map(function (v) {
        return v.index;
      }).sort();
      _this.renderItems(positions);
    }, _this.comUpdate = function () {
      var _document$documentEle = document.documentElement,
          clientWidth = _document$documentEle.clientWidth,
          clientHeight = _document$documentEle.clientHeight;

      _this.setState({
        clientWidth: clientWidth,
        clientHeight: clientHeight
      }, function () {
        _this.renderItems();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      var _state = this.state,
          bg = _state.bg,
          current = _state.current,
          items = _state.items;

      return _react2.default.createElement(
        "div",
        { className: "home", style: { backgroundImage: "url(" + bg + ")" } },
        _react2.default.createElement("div", { className: "home-music" }),
        _react2.default.createElement(
          "div",
          { className: "home-nav" },
          items
        ),
        _react2.default.createElement(
          "div",
          { className: "home-control" },
          _react2.default.createElement("div", { className: "home-control-random", onClick: this.upsetMenus }),
          _react2.default.createElement("div", { className: "home-control-row", onClick: this.setrow }),
          _react2.default.createElement("div", { className: "home-control-img", onClick: this.updateBg })
        )
      );
    }
  }, {
    key: "renderItems",
    value: function renderItems(positions) {
      var _calculate = this.calculate(),
          width = _calculate.width,
          height = _calculate.height,
          rowNum = _calculate.rowNum,
          colNum = _calculate.colNum,
          itemNum = rowNum * colNum,
          position = positions || this.getPosition(itemNum),
          order = 0,
          items = [];

      var _loop = function _loop(i) {
        if (position.some(function (v) {
          return v === i;
        })) {
          var _menus = _const.menus[order++],
              path = _menus.path,
              name = _menus.name,
              index = _menus.index;

          items.push(_react2.default.createElement(_item2.default, { key: i, cs: "home-item", width: width, height: height, path: path, name: name, index: index, ismenu: true }));
        } else {
          items.push(_react2.default.createElement(_item2.default, { key: i, cs: "home-item", width: width, height: height }));
        }
      };

      for (var i = 0; i < itemNum; i++) {
        _loop(i);
      }
      this.setState({
        items: items
      });
    }
  }, {
    key: "getBgImg",
    value: function getBgImg() {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 9;

      var i = (0, _maths.generateIntNumber)(num);
      return __webpack_require__(452)("./homebg" + i + ".jpg");
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      window.addEventListener("resize", this.comUpdate);
      this.renderItems();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.comUpdate);
    }
  }]);

  return Home;
}(_react.PureComponent)) || _class);
exports.default = Home;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Home, "Home", "F:/web/PersonalSite/web/src/components/home/index.js");
}();

;

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trans;

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__(183);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function trans(id) {
  var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var valueMap = values.reduce(function (a, b, i) {
    return Object.assign(a, _defineProperty({}, i, b));
  }, {});
  return _react2.default.createElement(_reactIntl.FormattedMessage, { id: id, values: valueMap });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(trans, "trans", "F:/web/PersonalSite/web/src/libs/trans.js");
}();

;

/***/ }),

/***/ 444:
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

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(125);

var _classnames = __webpack_require__(446);

var _classnames2 = _interopRequireDefault(_classnames);

var _trans = __webpack_require__(443);

var _trans2 = _interopRequireDefault(_trans);

var _colors = __webpack_require__(447);

__webpack_require__(448);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = document.documentElement.style;
var MenuItem = (_temp2 = _class = function (_PureComponent) {
  _inherits(MenuItem, _PureComponent);

  function MenuItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MenuItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      on: false,
      defaultColor: (0, _colors.generateRandomColors)({ r: { rg: 200 } }),
      nameColor: (0, _colors.generateRandomColors)()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MenuItem, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          ismenu = _props.ismenu,
          name = _props.name,
          index = _props.index,
          color = _props.color,
          images = _props.images,
          children = _props.children,
          path = _props.path,
          cs = _props.cs,
          height = _props.height,
          width = _props.width;
      var _state = this.state,
          on = _state.on,
          defaultColor = _state.defaultColor,
          nameColor = _state.nameColor;

      return _react2.default.createElement(
        "div",
        { className: (0, _classnames2.default)("common-item", cs) },
        ismenu ? _react2.default.createElement(
          "div",
          {
            className: (0, _classnames2.default)("menu-item", { on: on }),
            style: {
              width: width,
              height: height,
              backgroundColor: color || defaultColor
            }
          },
          children || _react2.default.createElement(
            _reactRouterDom.Link,
            {
              to: path,
              style: { color: nameColor }
            },
            _react2.default.createElement(
              "div",
              { className: "menu-item-index" },
              index > 9 ? index : "0" + index
            ),
            _react2.default.createElement(
              "i",
              {
                className: "menu-item-name"
              },
              typeof name === "string" ? (0, _trans2.default)(name) : name
            )
          )
        ) : _react2.default.createElement("div", {
          className: "void-item",
          style: {
            width: width,
            height: height,
            backgroundImage: "url(" + images + ")"
          }
        })
      );
    }
  }]);

  return MenuItem;
}(_react.PureComponent), _class.defaultProps = {
  images: __webpack_require__(449)
}, _temp2);
exports.default = MenuItem;
;

var _temp3 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(style, "style", "F:/web/PersonalSite/web/src/components/home/components/item/index.js");

  __REACT_HOT_LOADER__.register(MenuItem, "MenuItem", "F:/web/PersonalSite/web/src/components/home/components/item/index.js");
}();

;

/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateRandomColors = generateRandomColors;

var _maths = __webpack_require__(444);

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function generateRandomColors() {
  var _colors;

  var colors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var r = {},
      g = {},
      b = (_colors = colors, _objectDestructuringEmpty(_colors), _colors),
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

/***/ }),

/***/ 448:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/grid.png";

/***/ }),

/***/ 450:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var menus = exports.menus = [{
  index: 1,
  name: "MyBlog",
  path: "blog"
}, {
  index: 2,
  name: "ChatRoom",
  path: "chat"
}];

var _document$documentEle = document.documentElement;
var clientWidth = _document$documentEle.clientWidth,
    clientHeight = _document$documentEle.clientHeight;
exports.clientWidth = clientWidth;
exports.clientHeight = clientHeight;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(menus, "menus", "F:/web/PersonalSite/web/src/components/home/const.js");

  __REACT_HOT_LOADER__.register(clientWidth, "clientWidth", "F:/web/PersonalSite/web/src/components/home/const.js");

  __REACT_HOT_LOADER__.register(clientHeight, "clientHeight", "F:/web/PersonalSite/web/src/components/home/const.js");
}();

;

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./homebg0.jpg": 453,
	"./homebg1.jpg": 454,
	"./homebg2.jpg": 455,
	"./homebg3.jpg": 456,
	"./homebg4.jpg": 457,
	"./homebg5.jpg": 458,
	"./homebg6.jpg": 459,
	"./homebg7.jpg": 460,
	"./homebg8.jpg": 461,
	"./homebg9.jpg": 462
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 452;

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/homebg0.jpg";

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/homebg1.jpg";

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/homebg2.jpg";

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/homebg3.jpg";

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/homebg4.jpg";

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/homebg5.jpg";

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/homebg6.jpg";

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/homebg7.jpg";

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/homebg8.jpg";

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/homebg9.jpg";

/***/ })

});