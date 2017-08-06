webpackJsonp([6,24,49],{

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CLASS_PREFIX = exports.CLASS_PREFIX = "zgp";
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CLASS_PREFIX, "CLASS_PREFIX", "F:/web/PersonalSite/web/src/libs/components/const.js");
}();

;

/***/ }),

/***/ 475:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 487:
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

/***/ 97:
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

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(487);

var _classnames2 = _interopRequireDefault(_classnames);

var _const = __webpack_require__(205);

__webpack_require__(475);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RightMenu = (_temp2 = _class = function (_PureComponent) {
  _inherits(RightMenu, _PureComponent);

  function RightMenu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RightMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RightMenu.__proto__ || Object.getPrototypeOf(RightMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      visible: false,
      x: 0,
      y: 0
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RightMenu, [{
    key: "createMenu",
    value: function createMenu() {
      var _props = this.props,
          menus = _props.menus,
          info = _props.info;

      return menus.map(function (v, i) {
        return _react2.default.createElement(
          "div",
          {
            key: i,
            onClick: function onClick() {
              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.event;
              v.click(info, e);
            },
            className: _const.CLASS_PREFIX + "-menu-item"
          },
          _react2.default.createElement("span", { className: "icon icon-" + v.icon }),
          _react2.default.createElement(
            "span",
            { className: "text" },
            v.text
          )
        );
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          cs = _props2.cs,
          children = _props2.children,
          onCancel = _props2.onCancel,
          _state = this.state,
          x = _state.x,
          y = _state.y;

      return this.state.visible ? _react2.default.createElement(
        "div",
        {
          className: _const.CLASS_PREFIX + "-menu-wrap",
          onClick: onCancel,
          ref: function ref(ele) {
            return _this2.menu = ele;
          }
        },
        _react2.default.createElement(
          "div",
          {
            className: (0, _classnames2.default)(_const.CLASS_PREFIX + "-menu", cs),
            style: {
              left: x,
              top: y
            }
          },
          children || this.createMenu()
        )
      ) : null;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref2) {
      var visible = _ref2.visible,
          menus = _ref2.menus,
          x = _ref2.x,
          y = _ref2.y;

      this.setState({
        visible: visible,
        y: menus.length * 32 + y > window.innerHeight ? y - menus.length * 32 : y,
        x: 160 + x > window.innerWidth ? x - 160 : x
      });
    }
  }]);

  return RightMenu;
}(_react.PureComponent), _class.defaultProps = {
  visible: false,
  x: 0,
  y: 0
}, _class.propTypes = {
  visible: _propTypes2.default.bool, //控制是否渲染菜单
  x: _propTypes2.default.number, //菜单相对设备x轴的位置
  y: _propTypes2.default.number, //菜单相对设备y轴的位置
  menus: _propTypes2.default.arrayOf( //菜单列表
  _propTypes2.default.shape({
    text: _propTypes2.default.any, //菜单显示内容
    icon: _propTypes2.default.oneOfType([//菜单图标class,须引入图标库
    _propTypes2.default.number, _propTypes2.default.string]),
    click: _propTypes2.default.func //点击菜单时回调
  })),
  info: _propTypes2.default.any //菜单回调所需信息
}, _temp2);
exports.default = RightMenu;
;

var _temp3 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RightMenu, "RightMenu", "F:/web/PersonalSite/web/src/libs/components/rightClickMenu/index.js");
}();

;

/***/ })

});