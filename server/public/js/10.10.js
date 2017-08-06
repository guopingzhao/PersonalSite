webpackJsonp([10,24,55],{

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

/***/ 473:
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

/***/ 94:
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

__webpack_require__(473);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = (_temp2 = _class = function (_PureComponent) {
  _inherits(Checkbox, _PureComponent);

  function Checkbox() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      values: new Set()
    }, _this.onClick = function (data) {
      var _this$props = _this.props,
          field = _this$props.field,
          click = _this$props.click,
          values = _this.state.values,
          value = data[field] || data;

      if (click) {
        if (!values.has(value)) click(value, data);
        _this.onChange(value);
      } else {
        _this.onChange(value);
      }
    }, _this.onChange = function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(value) {
        var values, onChange, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                values = _this.state.values, onChange = _this.props.onChange;
                data = new Set(values);

                if (!data.has(value)) {
                  _context.next = 8;
                  break;
                }

                data.delete(value);
                _context.next = 6;
                return _this.setState({
                  values: data
                });

              case 6:
                _context.next = 10;
                break;

              case 8:
                _context.next = 10;
                return _this.setState({
                  values: data.add(value)
                });

              case 10:
                if (onChange) onChange(Array.from(data));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.selectAll = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
      var _this$props2, onChange, dataSource, field, data;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$props2 = _this.props, onChange = _this$props2.onChange, dataSource = _this$props2.dataSource, field = _this$props2.field;
              data = new Set(dataSource.map(function (v) {
                return v[field] || v;
              }));
              _context2.next = 4;
              return _this.setState({
                values: data
              });

            case 4:

              if (onChange) onChange(Array.from(_this.state.values));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _this.cleanAll = function () {
      var onChange = _this.props.onChange;

      _this.setState({
        values: new Set()
      });
      if (onChange) onChange([]);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var cs = this.props.cs;

      return _react2.default.createElement(
        "div",
        {
          className: (0, _classnames2.default)(_const.CLASS_PREFIX + "-checkbox", cs)
        },
        this.createItems()
      );
    }
  }, {
    key: "createItems",
    value: function createItems() {
      var _this3 = this;

      var _props = this.props,
          _props$dataSource = _props.dataSource,
          dataSource = _props$dataSource === undefined ? [] : _props$dataSource,
          disabled = _props.disabled;

      return dataSource.map(function (v, i) {
        return _react2.default.createElement(
          "div",
          {
            className: (0, _classnames2.default)(_const.CLASS_PREFIX + "-checkbox-item", disabled ? { disabled: disabled(v) } : {}),
            key: i
          },
          _this3.createItem(v, i)
        );
      });
    }
  }, {
    key: "createItem",
    value: function createItem(data) {
      var _this4 = this;

      var _props2 = this.props,
          field = _props2.field,
          label = _props2.label,
          type = _props2.type,
          values = this.state.values;

      switch (type) {
        case "box":
          return _react2.default.createElement(
            "div",
            {
              className: (0, _classnames2.default)(_const.CLASS_PREFIX + "-checkbox-box", { on: values.has(data[field] || data) }),
              onClick: function onClick() {
                return _this4.onClick(data);
              }
            },
            data[label] || data[field] || data
          );
        default:
          return _react2.default.createElement(
            "div",
            {
              className: _const.CLASS_PREFIX + "-checkbox-default"
            },
            _react2.default.createElement("div", {
              className: (0, _classnames2.default)(_const.CLASS_PREFIX + "-checkbox-default-select", { on: values.has(data[field] || data) }),
              onClick: function onClick() {
                return _this4.onClick(data);
              }
            }),
            _react2.default.createElement(
              "span",
              null,
              data[label] || data["label"] || data[field] || data
            )
          );
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var value = nextProps.value,
          defaultValue = nextProps.defaultValue;

      if (value !== this.props.value) {
        this.setState({
          values: new Set(value)
        });
      }
      if (defaultValue !== this.props.defaultValue) {
        this.setState({
          values: new Set(defaultValue)
        });
      }
    }
  }]);

  return Checkbox;
}(_react.PureComponent), _class.defaultProps = {
  type: "default"
}, _class.propTypes = {
  dataSource: _propTypes2.default.arrayOf( //所有选项
  _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])).isRequired,
  value: _propTypes2.default.array, //可控的CheckBox
  defaultValue: _propTypes2.default.array, //默认值
  type: _propTypes2.default.oneOf(["box", "default"]), //ui模式
  onChange: _propTypes2.default.func, //value改变时执行
  click: _propTypes2.default.func, //CheckBox被选中时回调
  field: _propTypes2.default.string, //当选项为object时，可指定value字段，不指定则把object作为value
  label: _propTypes2.default.string, //当选项为object时必传，指定标签显示字段
  cs: _propTypes2.default.oneOfType([//指定容器class
  _propTypes2.default.string, _propTypes2.default.object])
}, _temp2);
exports.default = Checkbox;
;

var _temp3 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Checkbox, "Checkbox", "F:/web/PersonalSite/web/src/libs/components/form/checkbox/index.js");
}();

;

/***/ })

});