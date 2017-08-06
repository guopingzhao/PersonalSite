webpackJsonp([8,24,52],{

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

/***/ 459:
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

/***/ 89:
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

var _objTool = __webpack_require__(87);

__webpack_require__(459);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = (_temp2 = _class = function (_PureComponent) {
  _inherits(FormItem, _PureComponent);

  function FormItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormItem.__proto__ || Object.getPrototypeOf(FormItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      error: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormItem, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          label = _props.label,
          cs = _props.cs,
          children = _props.children;

      return _react2.default.createElement(
        "div",
        { className: (0, _classnames2.default)(_const.CLASS_PREFIX + "-item", cs) },
        _react2.default.createElement(
          "div",
          { className: _const.CLASS_PREFIX + "-item-warp" },
          label ? null : _react2.default.createElement(
            "div",
            { className: _const.CLASS_PREFIX + "-item-label" },
            this.getIsRequired() ? _react2.default.createElement(
              "span",
              null,
              "*"
            ) : "",
            label
          ),
          _react2.default.createElement(
            "div",
            null,
            children
          )
        )
      );
    }
  }, {
    key: "getIsRequired",
    value: function getIsRequired() {
      var _props2 = this.props,
          isRequire = _props2.isRequire,
          children = _props2.children;

      if (isRequire) return isRequire;
      if (Array.isArray(children)) {
        return children.some(function (child) {
          return (0, _objTool.read)(child, "props.isRequired");
        });
      } else {
        return (0, _objTool.read)(children, "props.isRequired");
      }
    }
  }]);

  return FormItem;
}(_react.PureComponent), _class.isFormItem = true, _class.propTypes = {
  label: _propTypes2.default.oneOfType([_propTypes2.default.oneOf([false]), //不显示标签
  _propTypes2.default.string, //显示标签的类容
  _propTypes2.default.node, _propTypes2.default.element]),
  cs: _propTypes2.default.oneOfType([//指定容器class
  _propTypes2.default.string, _propTypes2.default.object])
}, _temp2);
exports.default = FormItem;
;

var _temp3 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FormItem, "FormItem", "F:/web/PersonalSite/web/src/libs/components/form/item/index.js");
}();

;

/***/ })

});