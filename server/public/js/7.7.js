webpackJsonp([7,24,50],{

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

/***/ 460:
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

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(487);

var _classnames2 = _interopRequireDefault(_classnames);

var _const = __webpack_require__(205);

__webpack_require__(460);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = (_temp = _class = function (_PureComponent) {
  _inherits(Page, _PureComponent);

  function Page(props) {
    var _this2 = this;

    _classCallCheck(this, Page);

    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

    _this.jumpPage = function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.event,
          key = _ref.key,
          target = _ref.target;

      if (key === "Enter") {
        var pageSize = _this.state.pageSize,
            _this$props = _this.props,
            total = _this$props.total,
            onChange = _this$props.onChange;

        if (+total >= +target.value && onChange) {
          onChange(+target.value, pageSize);
        }
      }
    };

    _this.pagesizeChange = function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(page, e) {
        var _this$state, pageSize, current, onChange, Cpage;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.stopPropagation();
                _this$state = _this.state, pageSize = _this$state.pageSize, current = _this$state.current;

                _this.setState({
                  pageSize: page,
                  showSizeOption: false
                });
                onChange = _this.props.onChange;
                Cpage = 1;


                if (+pageSize > +page) {
                  Cpage = Math.ceil((current - 1) * pageSize / page);
                } else {
                  Cpage = Math.ceil(current * pageSize / page);
                }
                if (onChange) {
                  onChange(Cpage > 0 ? Cpage : 1, page);
                } else {
                  _this.setState({
                    current: Cpage
                  });
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.state = {
      showSizeOption: false,
      pageSize: props.pageSize,
      current: props.current
    };
    return _this;
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var cs = this.props.cs;

      return _react2.default.createElement(
        "div",
        {
          className: (0, _classnames2.default)(_const.CLASS_PREFIX + "-page", cs),
          onClick: function onClick() {
            return _this3.setState({ showSizeOption: false });
          }
        },
        this.createPage()
      );
    }
  }, {
    key: "createPage",
    value: function createPage() {
      var _props = this.props,
          total = _props.total,
          elements = _props.elements,
          showTotal = _props.showTotal,
          showSizeChange = _props.showSizeChange,
          showJump = _props.showJump,
          type = _props.type,
          showtotalElements = _props.showtotalElements,
          elementsFormat = _props.elementsFormat;

      var firstPage = this.createPageItem(1);
      var lastPage = total > 1 ? this.createPageItem(total) : null;
      var totalNode = showTotal ? _react2.default.createElement(
        "span",
        { key: "total" },
        "\u5171",
        Math.ceil(total),
        "\u9875"
      ) : null;
      var totalElements = showtotalElements ? _react2.default.createElement(
        "span",
        { key: "totalElements" },
        elementsFormat ? elementsFormat.replace(/{.*}/, elements) : "\u5171" + elements + "\u9879"
      ) : null;
      switch (type) {
        case "a":
          //待定
          return [];
        default:
          return [totalElements, totalNode, showSizeChange ? this.createPageSizeChange() : null, this.createPrevButton(), firstPage].concat(_toConsumableArray(this.createDefaultPage()), [lastPage, this.createNextButton(), showJump ? this.createJump() : null]);
      }
    }
  }, {
    key: "createPageSizeChange",
    value: function createPageSizeChange() {
      var _this4 = this;

      var _state = this.state,
          pageSize = _state.pageSize,
          showSizeOption = _state.showSizeOption;
      var _props2 = this.props,
          sizeAry = _props2.sizeAry,
          selectSizeFormat = _props2.selectSizeFormat;

      return _react2.default.createElement(
        "div",
        {
          className: (0, _classnames2.default)("pageSize-select", { on: showSizeOption }),
          onClick: function onClick() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.event;

            e.stopPropagation();
            _this4.setState({ showSizeOption: !showSizeOption });
          },
          key: "pageSize-select"
        },
        selectSizeFormat ? selectSizeFormat.replace(/{.*}/, pageSize) : pageSize,
        _react2.default.createElement(
          "div",
          {
            className: "pageSize-option",
            key: "pageSize-option",
            onMouseOut: function onMouseOut() {
              return _this4.setState({ showSizeOption: false });
            }
          },
          sizeAry.map(function (v, i) {
            return _react2.default.createElement(
              "div",
              {
                className: (0, _classnames2.default)("pageSize-option-select", { on: pageSize === v }),
                key: i,
                onClick: function onClick() {
                  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.event;
                  return _this4.pagesizeChange(v, e);
                },
                onMouseOut: function onMouseOut(e) {
                  return e.stopPropagation();
                }
              },
              selectSizeFormat ? selectSizeFormat.replace(/{.*}/, v) : v
            );
          })
        )
      );
    }
  }, {
    key: "createJump",
    value: function createJump() {
      var _props3 = this.props,
          elements = _props3.elements,
          pageSize = _props3.pageSize,
          total = _props3.total;

      return _react2.default.createElement(
        "div",
        {
          className: "jump",
          key: "jump"
        },
        _react2.default.createElement(
          "span",
          null,
          "\u8DF3\u8F6C"
        ),
        _react2.default.createElement("input", {
          type: "text",
          disabled: (total || elements / pageSize) <= 1,
          onKeyPress: this.jumpPage
        })
      );
    }
  }, {
    key: "createDefaultPage",
    value: function createDefaultPage() {
      var current = this.state.current;
      var total = this.props.total;

      var items = [];
      if (current <= 4) {
        for (var i = 2; i < total; i++) {
          if (current <= 5) {
            if (i <= 5) {
              items.push(this.createPageItem(i));
            } else {
              items.push(this.createNext5Button());
              break;
            }
          }
        }
        return items;
      }

      if (current > 4 && current < total - 3) {
        for (var _i = 3; _i >= -3 && current - _i > 1 && current - _i < total; _i--) {
          if (_i === 3) {
            if (current - _i === 2) {
              items.push(this.createPageItem(2));
            } else {
              items.push(this.createPrev5Button());
            }
          } else if (_i === -3) {
            if (current - _i === total - 1) {
              items.push(this.createPageItem(total - 1));
            } else {
              items.push(this.createNext5Button());
            }
          } else {
            items.push(this.createPageItem(current - _i));
          }
        }
        return items;
      }

      if (current >= total - 3) {
        for (var _i2 = 1; _i2 < 5 && total - _i2 > 1; _i2++) {
          var number = total - _i2;
          items.unshift(this.createPageItem(number));
          if (_i2 === 4) {
            if (number === 2) {
              items.unshift(this.createPageItem(number));
            } else {
              items.unshift(this.createPrev5Button());
            }
            break;
          }
        }
        return items;
      }
      return [];
    }
  }, {
    key: "createPageItem",
    value: function createPageItem(i) {
      var _this5 = this;

      var current = this.state.current;
      var pageFormat = this.props.pageFormat;

      return _react2.default.createElement(
        "div",
        {
          className: (0, _classnames2.default)("page-item", { on: current === i }),
          key: i,
          onClick: function onClick() {
            _this5.pageChange(i);
          }
        },
        pageFormat ? pageFormat.replace(/{.*}/g, i) : _react2.default.createElement(
          "span",
          {
            className: "number",
            key: "number" + i
          },
          i
        )
      );
    }
  }, {
    key: "createPrevButton",
    value: function createPrevButton() {
      var _this6 = this;

      var current = this.state.current;

      return _react2.default.createElement(
        "div",
        {
          className: (0, _classnames2.default)("page-item", { disabled: current <= 1 }),
          key: "prev"
        },
        _react2.default.createElement("span", {
          className: "page-item-prev",
          onClick: function onClick() {
            if (current > 1) _this6.pageChange(current - 1);
          }
        })
      );
    }
  }, {
    key: "createNextButton",
    value: function createNextButton() {
      var _this7 = this;

      var current = this.state.current;
      var total = this.props.total;

      return _react2.default.createElement(
        "div",
        {
          className: (0, _classnames2.default)("page-item", { disabled: current >= total }),
          key: "next"
        },
        _react2.default.createElement("span", {
          className: "page-item-next",
          onClick: function onClick() {
            if (current < total) _this7.pageChange(current + 1);
          }
        })
      );
    }
  }, {
    key: "createPrev5Button",
    value: function createPrev5Button() {
      var _this8 = this;

      var current = this.state.current;

      return _react2.default.createElement(
        "div",
        {
          className: "page-item",
          key: "leftover-prev"
        },
        _react2.default.createElement("span", {
          className: "leftover prev",
          onClick: function onClick() {
            var cur = current - 5;
            _this8.pageChange(cur > 0 ? cur : 1);
          }
        })
      );
    }
  }, {
    key: "createNext5Button",
    value: function createNext5Button() {
      var _this9 = this;

      var _props4 = this.props,
          current = _props4.current,
          total = _props4.total;

      return _react2.default.createElement(
        "div",
        {
          className: "page-item",
          key: "leftover-next"
        },
        _react2.default.createElement("span", {
          className: "leftover next",
          onClick: function onClick() {
            var cur = current + 5;
            _this9.pageChange(cur <= total ? cur : total);
          }
        })
      );
    }
  }, {
    key: "pageChange",
    value: function pageChange(i) {
      var onChange = this.props.onChange,
          pageSize = this.state.pageSize;

      if (onChange) {
        onChange(i, pageSize);
      } else {
        this.setState({
          current: i
        });
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var pageSize = nextProps.pageSize,
          current = nextProps.current;

      if (current) {
        this.setState({
          current: current
        });
      }
      if (pageSize) {
        this.setState({
          pageSize: pageSize
        });
      }
    }
  }]);

  return Page;
}(_react.PureComponent), _class.propTypes = {
  pageSize: _propTypes2.default.oneOfType([//设置当前显示多少条,默认10条
  _propTypes2.default.number, _propTypes2.default.string]),
  current: _propTypes2.default.oneOfType([//设置当前显示第几页
  _propTypes2.default.number, _propTypes2.default.string]),
  total: _propTypes2.default.oneOfType([//一共多少页
  _propTypes2.default.number, _propTypes2.default.string]).isRequired,
  pageFormat: _propTypes2.default.string, //格式化页码显示格式
  showSizeChange: _propTypes2.default.bool, //是否支持改变pageSize
  showJump: _propTypes2.default.bool, //是否支持页码跳转
  showTotal: _propTypes2.default.bool, //是否支持显示共多少页
  showtotalElements: _propTypes2.default.bool, //是否支持显示共多少条
  elements: _propTypes2.default.oneOfType([//一共多少条
  _propTypes2.default.number, _propTypes2.default.string]),
  elementsFormat: _propTypes2.default.string, //格式化总条数显示格式
  sizeAry: _propTypes2.default.array, //支持哪些pageSize
  selectSizeFormat: _propTypes2.default.string, //pageSize选项显示格式
  onChange: _propTypes2.default.func //页码,pageSize改变的回调
}, _class.defaultProps = {
  pageSize: 10,
  current: 1,
  total: 1,
  sizeAry: [10, 20, 50, 100]
}, _temp);
exports.default = Page;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Page, "Page", "F:/web/PersonalSite/web/src/libs/components/page/index.js");
}();

;

/***/ })

});