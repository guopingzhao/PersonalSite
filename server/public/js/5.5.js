webpackJsonp([5,21,24,47],{

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

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var offset = 8;
var placements = {
  getLeft: function getLeft(_ref) {
    var left = _ref.left,
        width = _ref.width,
        height = _ref.height,
        bottom = _ref.bottom,
        top = _ref.top;
    return {
      x: left - offset - width,
      y: (bottom - top - height) / 2 + top,
      placement: "left"
    };
  },
  getRight: function getRight(_ref2) {
    var right = _ref2.right,
        height = _ref2.height,
        bottom = _ref2.bottom,
        top = _ref2.top;
    return {
      x: right + offset,
      y: (bottom - top - height) / 2 + top,
      placement: "right"
    };
  },
  getTop: function getTop(_ref3) {
    var right = _ref3.right,
        left = _ref3.left,
        width = _ref3.width,
        height = _ref3.height,
        top = _ref3.top;
    return {
      x: (right - left - width) / 2 + left,
      y: top - offset - height,
      placement: "top"
    };
  },
  getBottom: function getBottom(_ref4) {
    var right = _ref4.right,
        left = _ref4.left,
        width = _ref4.width,
        bottom = _ref4.bottom;
    return {
      x: (right - left - width) / 2 + left,
      y: bottom + offset,
      placement: "bottom"
    };
  },
  left: function left(_ref5, _ref6) {
    var width = _ref5.width,
        height = _ref5.height,
        top = _ref5.top,
        bottom = _ref5.bottom,
        _left = _ref5.left,
        right = _ref5.right;
    var innerWidth = _ref6.innerWidth;

    if (_left - width - offset > 0) {
      return this.getLeft({ left: _left, width: width, height: height, bottom: bottom, top: top });
    }

    if (width + right + offset < innerWidth) {
      return this.getRight({ right: right, height: height, bottom: bottom, top: top });
    }

    if (top - offset - height > 0) {
      return this.getTop({ right: right, left: _left, width: width, height: height, top: top });
    }

    if (bottom + offset + height) {
      return this.getBottom({ right: right, left: _left, width: width, bottom: bottom });
    }
  },
  right: function right(_ref7, _ref8) {
    var width = _ref7.width,
        height = _ref7.height,
        top = _ref7.top,
        bottom = _ref7.bottom,
        left = _ref7.left,
        _right = _ref7.right;
    var innerWidth = _ref8.innerWidth,
        innerHeight = _ref8.innerHeight;

    if (width + _right + offset < innerWidth) {
      return this.getRight({ right: _right, height: height, bottom: bottom, top: top });
    }

    if (left - width - offset > 0) {
      return this.getLeft({ left: left, width: width, height: height, bottom: bottom, top: top });
    }

    if (top - offset - height > 0) {
      return this.getTop({ right: _right, left: left, width: width, height: height, top: top });
    }

    if (bottom + offset + height < innerHeight) {
      return this.getBottom({ right: _right, left: left, width: width, bottom: bottom });
    }
  },
  top: function top(_ref9, _ref10) {
    var width = _ref9.width,
        height = _ref9.height,
        _top = _ref9.top,
        bottom = _ref9.bottom,
        left = _ref9.left,
        right = _ref9.right;
    var innerWidth = _ref10.innerWidth,
        innerHeight = _ref10.innerHeight;

    if (_top - offset - height > 0) {
      return this.getTop({ right: right, left: left, width: width, height: height, top: _top });
    }

    if (bottom + offset + height < innerHeight) {
      return this.getBottom({ right: right, left: left, width: width, bottom: bottom });
    }

    if (left - width - offset > 0) {
      return this.getLeft({ left: left, width: width, height: height, bottom: bottom, top: _top });
    }

    if (width + right + offset < innerWidth) {
      return this.getRight({ right: right, height: height, bottom: bottom, top: _top });
    }
  },
  bottom: function bottom(_ref11, _ref12) {
    var width = _ref11.width,
        height = _ref11.height,
        top = _ref11.top,
        _bottom = _ref11.bottom,
        left = _ref11.left,
        right = _ref11.right;
    var innerWidth = _ref12.innerWidth,
        innerHeight = _ref12.innerHeight;

    if (_bottom + offset + height < innerHeight) {
      return this.getBottom({ right: right, left: left, width: width, bottom: _bottom });
    }

    if (top - offset - height > 0) {
      return this.getTop({ right: right, left: left, width: width, height: height, top: top });
    }

    if (left - width - offset > 0) {
      return this.getLeft({ left: left, width: width, height: height, bottom: _bottom, top: top });
    }

    if (width + right + offset < innerWidth) {
      return this.getRight({ right: right, height: height, bottom: _bottom, top: top });
    }
  }
};

var _default = function _default(placement, info) {
  var _window = window,
      innerWidth = _window.innerWidth,
      innerHeight = _window.innerHeight;

  return placements[placement](info, { innerWidth: innerWidth, innerHeight: innerHeight }) || placements.getTop(_extends({}, info, { innerWidth: innerWidth, innerHeight: innerHeight }));
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(offset, "offset", "F:/web/PersonalSite/web/src/libs/components/tooltip/placements.js");

  __REACT_HOT_LOADER__.register(placements, "placements", "F:/web/PersonalSite/web/src/libs/components/tooltip/placements.js");

  __REACT_HOT_LOADER__.register(_default, "default", "F:/web/PersonalSite/web/src/libs/components/tooltip/placements.js");
}();

;

/***/ }),

/***/ 461:
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

/***/ 91:
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

__webpack_require__(461);

var _placements2 = __webpack_require__(211);

var _placements3 = _interopRequireDefault(_placements2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var clone = _react2.default.cloneElement;
var Tooltip = (_temp2 = _class = function (_PureComponent) {
  _inherits(Tooltip, _PureComponent);

  function Tooltip() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      x: 0,
      y: 0,
      placement: null,
      visible: false
    }, _this.onShow = function () {
      _this.initPosition();
      _this.setState({ visible: true });
    }, _this.onHide = function () {
      _this.setState({
        visible: false
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tooltip, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          cs = _props.cs,
          title = _props.title,
          _state = this.state,
          placement = _state.placement,
          visible = _state.visible,
          x = _state.x,
          y = _state.y;

      return _react2.default.createElement(
        "span",
        {
          className: (0, _classnames2.default)(_const.CLASS_PREFIX + "-tooltip", cs)
        },
        _react2.default.createElement(
          "span",
          {
            className: (0, _classnames2.default)(_const.CLASS_PREFIX + "-tooltip-title", placement, { show: visible }),
            ref: function ref(ele) {
              return _this2.title = ele;
            },
            style: {
              left: x,
              top: y
            }
          },
          title
        ),
        _react2.default.createElement(
          "span",
          { className: _const.CLASS_PREFIX + "-tooltip-child" },
          this.getChild()
        )
      );
    }
  }, {
    key: "getChild",
    value: function getChild() {
      var _this3 = this;

      var _props2 = this.props,
          children = _props2.children,
          title = _props2.title,
          _props2$trigger = _props2.trigger,
          trigger = _props2$trigger === undefined ? "hover" : _props2$trigger;


      if (title) {
        switch (trigger) {
          case "hover":
            return clone(children, {
              onMouseOver: this.onShow,
              onMouseLeave: this.onHide,
              ref: function ref(ele) {
                return _this3.child = ele;
              }
            });
          case "click":
            return clone(children, {
              onMouseDown: this.onShow,
              onMouseUp: this.onHide,
              ref: function ref(ele) {
                return _this3.child = ele;
              }
            });
          case "focus":
            return clone(children, {
              onFocus: this.onShow,
              onblur: this.onHide,
              ref: function ref(ele) {
                return _this3.child = ele;
              }
            });
          default:
            return clone(children, {
              onMouseOver: this.onShow,
              onMouseLeave: this.onHide,
              ref: function ref(ele) {
                return _this3.child = ele;
              }
            });
        }
      } else {
        return children;
      }
    }
  }, {
    key: "initPosition",
    value: function initPosition() {
      var _child$getBoundingCli = this.child.getBoundingClientRect(),
          top = _child$getBoundingCli.top,
          bottom = _child$getBoundingCli.bottom,
          left = _child$getBoundingCli.left,
          right = _child$getBoundingCli.right,
          _props$placement = this.props.placement,
          placement = _props$placement === undefined ? "top" : _props$placement,
          title = this.title,
          _title$getBoundingCli = title.getBoundingClientRect(),
          width = _title$getBoundingCli.width,
          height = _title$getBoundingCli.height,
          _placements = (0, _placements3.default)(placement, { top: top, bottom: bottom, left: left, right: right, width: width, height: height }),
          x = _placements.x,
          y = _placements.y,
          newPlacement = _placements.placement;

      this.setState({
        x: x,
        y: y,
        placement: newPlacement
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      if (this.props.title) {
        this.initPosition();
        window.addEventListener("resize", function () {
          _this4.initPosition();
        });
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref2) {
      var title = _ref2.title;

      if (title !== this.props.title) {
        this.initPosition();
      }
    }
  }]);

  return Tooltip;
}(_react.PureComponent), _class.propTypes = {
  cs: _propTypes2.default.string, //容器class
  title: _propTypes2.default.oneOfType([//显示内容
  _propTypes2.default.element, _propTypes2.default.node, _propTypes2.default.string]),
  trigger: _propTypes2.default.oneOf(["hover, click, focus"]), //触发方式
  placement: _propTypes2.default.string //默认显示位置
}, _temp2);
exports.default = Tooltip;
;

var _temp3 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(clone, "clone", "F:/web/PersonalSite/web/src/libs/components/tooltip/index.js");

  __REACT_HOT_LOADER__.register(Tooltip, "Tooltip", "F:/web/PersonalSite/web/src/libs/components/tooltip/index.js");
}();

;

/***/ })

});