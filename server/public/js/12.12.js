webpackJsonp([12,14,22,54],{

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Checker = {
  integer: function integer(value) {
    return (/^\d+$/.test(value)
    );
  },
  idCard: function idCard(value) {
    return (/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}(\d{1}|X|x)$/.test(value)
    );
  },
  email: function email(value) {
    return (/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
    );
  },

  url: function url(value) {
    return (/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value)
    );
  },
  mobile: function mobile(value) {
    return (/^((0\d{2,3}\d{6,15})|(1[\d]{1}\d{9}))$/.test(value)
    );
  },
  phone: function phone(value) {
    return (/^((0\d{2,3})|(\(0\d{2,3}\)))?(-)?[1-9]\d{6,7}(([\-0-9]+)?[^\D]{1})?$/.test(value) || /^((0\d{2,3}\d{6,15})|(1[358]{1}\d{9}))$/.test(value)
    );
  },
  date: function date(value) {
    return (/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value)
    );
  },

  number: function number(value) {
    return (/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value)
    );
  },
  creditCard: function creditCard(value) {
    if (/[^0-9 \-]+/.test(value)) {
      return false;
    }
    var nCheck = 0,
        nDigit = 0,
        bEven = false,
        n = void 0,
        cDigit = void 0;

    var val = value.replace(/\D/g, "");

    if (val.length < 13 || val.length > 19) {
      return false;
    }

    for (n = val.length - 1; n >= 0; n--) {
      cDigit = val.charAt(n);
      nDigit = parseInt(cDigit, 10);
      if (bEven) {
        if ((nDigit *= 2) > 9) {
          nDigit -= 9;
        }
      }
      nCheck += nDigit;
      bEven = !bEven;
    }
    return nCheck % 10 === 0;
  }
};

var _default = Checker;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Checker, "Checker", "F:/web/PersonalSite/web/src/libs/components/form/utils/checker.js");

  __REACT_HOT_LOADER__.register(_default, "default", "F:/web/PersonalSite/web/src/libs/components/form/utils/checker.js");
}();

;

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = validate;

var _checker = __webpack_require__(207);

var _checker2 = _interopRequireDefault(_checker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var messages = {
  Require: "必填",
  Email: "请输入正确格式的电子邮件",
  Url: "请输入合法的网址",
  Date: "请输入合法的日期.",
  Number: "请输入合法的数字",
  Integer: "只能输入整数",
  Mobile: "请输入正确的手机号码",
  Phone: "请输入正确的电话号码",
  CreditCard: "请输入合法的信用卡号",
  IdCard: "请输入正确的18位证件号"
};

function getMessage(key) {
  return {
    key: key,
    message: messages[key]
  };
}

var Validator = {
  require: function require(value) {
    return value === undefined || value === null || !("" + value) ? getMessage("Require") : null;
  },
  integer: function integer(value) {
    return _checker2.default.integer(value) || !value ? null : getMessage("Integer");
  },
  idCard: function idCard(value) {
    return _checker2.default.idCard(value) || !value ? null : getMessage("IdCard");
  },
  email: function email(value) {
    return _checker2.default.email(value) || !value ? null : getMessage("Email");
  },
  url: function url(value) {
    return _checker2.default.url(value) || !value ? null : getMessage("Url");
  },
  mobile: function mobile(value) {
    return _checker2.default.mobile(value) || !value ? null : getMessage("Mobile");
  },
  phone: function phone(value) {
    return _checker2.default.phone(value) || !value ? null : getMessage("Phone");
  },
  date: function date(value) {
    return _checker2.default.date(value) || !value ? null : getMessage("Date");
  },
  number: function number(value) {
    return _checker2.default.number(value) || !value ? null : getMessage("Number");
  },
  creditCard: function creditCard(value) {
    return _checker2.default.creditCard(value) || !value ? null : getMessage("CreditCard");
  },
  regex: function regex(_ref) {
    var rule = _ref.rule,
        message = _ref.message;
    return function (value) {
      var type = typeof rule === "undefined" ? "undefined" : _typeof(rule);
      switch (type) {
        case "string":
          return Validator[rule](value) ? { rule: rule, message: message } : null;
        case "object":
          return value && rule.test(value) ? null : { rule: rule, message: message };
      }
    };
  }
};

function validate(validators, value) {
  if (!validators) return null;
  var funcValidators = validators.map(function (validator) {
    var type = typeof validator === "undefined" ? "undefined" : _typeof(validator);
    switch (type) {
      case "function":
        return validator;
      case "string":
        return Validator[validator];
      case "object":
        return Validator["regex"](validator);
      default:
        {
          var validatorEntries = Object.entries(validator);
          if (validatorEntries) {
            return Validator[validatorEntries[0][0]](validatorEntries[0][1]);
          }
        }
    }
  });
  var validateResult = funcValidators.reduce(function (x, func) {
    var result = func(value);
    if (result) {
      return x.concat(result);
    } else {
      return x;
    }
  }, []);
  if (validateResult.length) return validateResult;
  return null;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(messages, "messages", "F:/web/PersonalSite/web/src/libs/components/form/utils/validators.js");

  __REACT_HOT_LOADER__.register(getMessage, "getMessage", "F:/web/PersonalSite/web/src/libs/components/form/utils/validators.js");

  __REACT_HOT_LOADER__.register(Validator, "Validator", "F:/web/PersonalSite/web/src/libs/components/form/utils/validators.js");

  __REACT_HOT_LOADER__.register(validate, "validate", "F:/web/PersonalSite/web/src/libs/components/form/utils/validators.js");
}();

;

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = create;

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(487);

var _classnames2 = _interopRequireDefault(_classnames);

var _objTool = __webpack_require__(87);

var _validators = __webpack_require__(210);

var _validators2 = _interopRequireDefault(_validators);

__webpack_require__(458);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var map = _react2.default.Children.map,
    clone = _react2.default.cloneElement;
function create() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var globalRules = options.globalRules,
      mapProps = options.mapProps,
      onValuesChange = options.onValuesChange;

  return function (Com) {
    var _class, _temp, _initialiseProps;

    return _temp = _class = function (_PureComponent) {
      _inherits(L, _PureComponent);

      function L(props) {
        _classCallCheck(this, L);

        var _this = _possibleConstructorReturn(this, (L.__proto__ || Object.getPrototypeOf(L)).call(this, props));

        _initialiseProps.call(_this);

        if (mapProps) {
          _this.mapProps = mapProps(props);
        }
        _this.state = {
          errors: {},
          values: _this.mapProps.formValues || {}
        };
        return _this;
      }

      _createClass(L, [{
        key: "render",
        value: function render() {
          var _this2 = this;

          return _react2.default.createElement(Com, _extends({}, this.props, {
            form: _extends({}, this.form)
          }, this.mapProps, {
            ref: function ref(ele) {
              return _this2.ele = ele;
            }
          }));
        }
      }]);

      return L;
    }(_react.PureComponent), _initialiseProps = function _initialiseProps() {
      var _this3 = this;

      this.rules = {};
      this.childNum = {};
      this.initialValues = {};
      this.mapProps = {};
      this.form = {
        getFieldsValue: function getFieldsValue(fields) {
          return fields ? (0, _objTool.read)(_this3.state.values, fields) : _this3.state.values;
        },
        getFieldValue: function getFieldValue(field) {
          return (0, _objTool.read)(_this3.state.values, "" + field);
        },
        setFieldsValue: function setFieldsValue(values) {
          _this3.setState({
            values: (0, _objTool.assign)(_this3.state.values, values)
          });
        },
        setFields: function setFields() {
          var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var errors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _this3.setState({
            values: (0, _objTool.assign)(_this3.state.values, values),
            errors: (0, _objTool.assign)(_this3.state.errors, errors)
          });
        },
        validateFields: function validateFields(fields, cb) {
          return new Promise(function (res) {
            var type = typeof fields === "undefined" ? "undefined" : _typeof(fields);
            switch (type) {
              case "function":
                {
                  var errors = {};
                  var _iteratorNormalCompletion = true;
                  var _didIteratorError = false;
                  var _iteratorError = undefined;

                  try {
                    for (var _iterator = Object.keys(_this3.rules)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var v = _step.value;

                      if (_this3.childNum[v]) {
                        for (var i = 0, len = _this3.childNum[v]; i < len; i++) {
                          errors[v + "." + i] = (0, _validators2.default)((0, _objTool.read)(_this3.rules, "" + v), (0, _objTool.read)(_this3.state.values, v + "." + i));
                        }
                      } else {
                        errors["" + v] = (0, _validators2.default)((0, _objTool.read)(_this3.rules, "" + v), (0, _objTool.read)(_this3.state.values, "" + v));
                      }
                    }
                  } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                      }
                    } finally {
                      if (_didIteratorError) {
                        throw _iteratorError;
                      }
                    }
                  }

                  _this3.setState({
                    errors: errors
                  }, function () {
                    var result = Object.values(errors).some(function (v) {
                      return v;
                    });
                    if (result) {
                      fields(errors, _this3.state.values);
                    } else {
                      fields(null, _this3.state.values);
                    }
                  });
                  break;
                }
              case "object":
                {
                  var _errors = (0, _objTool.read)(_this3.state.errors, fields);
                  var _iteratorNormalCompletion2 = true;
                  var _didIteratorError2 = false;
                  var _iteratorError2 = undefined;

                  try {
                    for (var _iterator2 = Object.keys(fields)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                      var _v = _step2.value;

                      if (_this3.childNum[_v]) {
                        for (var _i = 0, _len = _this3.childNum[_v]; _i < _len; _i++) {
                          _errors[_v + "." + _i] = (0, _validators2.default)((0, _objTool.read)(_this3.rules, "" + _v, (0, _objTool.read)(_this3.state.values, _v + "." + _i)));
                        }
                      } else {
                        _errors["" + _v] = (0, _validators2.default)((0, _objTool.read)(_this3.rules, "" + _v, (0, _objTool.read)(_this3.state.values, "" + _v)));
                      }
                    }
                  } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                      }
                    } finally {
                      if (_didIteratorError2) {
                        throw _iteratorError2;
                      }
                    }
                  }

                  _this3.setState({
                    errors: Object.assign(_this3.state.errors, _errors)
                  }, function () {
                    var result = Object.values(_errors).some(function (v) {
                      return v;
                    }),
                        fieldValues = (0, _objTool.read)(_this3.state.values, fields);
                    if (result) {
                      cb(_errors, fieldValues);
                    } else {
                      cb(null, fieldValues);
                    }
                  });
                  break;
                }
              default:
                {
                  var _errors2 = {};
                  var _iteratorNormalCompletion3 = true;
                  var _didIteratorError3 = false;
                  var _iteratorError3 = undefined;

                  try {
                    for (var _iterator3 = Object.keys(_this3.rules)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                      var _v2 = _step3.value;

                      if (_this3.childNum[_v2]) {
                        for (var _i2 = 0, _len2 = _this3.childNum[_v2]; _i2 < _len2; _i2++) {
                          _errors2[_v2 + "." + _i2] = (0, _validators2.default)((0, _objTool.read)(_this3.rules, "" + _v2), (0, _objTool.read)(_this3.state.values, _v2 + "." + _i2));
                        }
                      } else {
                        _errors2["" + _v2] = (0, _validators2.default)((0, _objTool.read)(_this3.rules, "" + _v2), (0, _objTool.read)(_this3.state.values, "" + _v2));
                      }
                    }
                  } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                      }
                    } finally {
                      if (_didIteratorError3) {
                        throw _iteratorError3;
                      }
                    }
                  }

                  _this3.setState({
                    errors: _errors2
                  }, function () {
                    var result = Object.values(_errors2).some(function (v) {
                      return v;
                    });
                    if (result) {
                      res({ err: _errors2, values: _this3.state.values });
                    } else {
                      res({ err: null, values: _this3.state.values });
                    }
                  });
                }
            }
          });
        },
        validateField: function validateField(id, value, i) {
          var valResult = (0, _validators2.default)((0, _objTool.read)(_this3.rules, "" + id, []), value);
          _this3.setState({
            errors: (0, _objTool.write)(_this3.state.errors, "" + id + i, valResult, { reduce: true })
          });
          console.info("" + id + i, value, valResult);
        },
        getFieldError: function getFieldError(field) {
          return (0, _objTool.read)(_this3.state.errors, "" + field);
        },
        getFieldsError: function getFieldsError(fields) {
          return fields ? (0, _objTool.read)(_this3.state.errors, fields) : _this3.state.errors;
        },
        getErrorInfo: function getErrorInfo(id, message, ErrorCom) {
          var errorInfo = (0, _objTool.read)(_this3.state.errors, "" + id);
          if (errorInfo && errorInfo.length) {
            return ErrorCom ? _react2.default.createElement(ErrorCom, { info: message || errorInfo.reduce(function (x, _ref) {
                var message = _ref.message;
                return "" + (x ? x + "," : x) + message;
              }, "") }) : message || errorInfo.reduce(function (x, _ref2) {
              var message = _ref2.message;
              return "" + (x ? x + "," : x) + message;
            }, "");
          }
        },
        resetFields: function resetFields(fields) {
          if (fields) {
            _this3.setState({
              values: (0, _objTool.write)(_this3.state.values, fields, (0, _objTool.read)(_this3.initialValues, fields))
            });
          } else {
            _this3.setState({ values: _this3.initialValues });
          }
        },
        getFieldDecorator: function getFieldDecorator(id) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var rules = options.rules,
              allow = options.allow,
              message = options.message,
              errorCom = options.errorCom,
              initialValue = options.initialValue,
              _options$wrapClass = options.wrapClass,
              wrapClass = _options$wrapClass === undefined ? "" : _options$wrapClass,
              _options$ignoreRules = options.ignoreRules,
              ignoreRules = _options$ignoreRules === undefined ? [] : _options$ignoreRules,
              _options$valueName = options.valueName,
              valueName = _options$valueName === undefined ? "value" : _options$valueName,
              _options$trigger = options.trigger,
              trigger = _options$trigger === undefined ? "onChange" : _options$trigger,
              _options$validateTrig = options.validateTrigger,
              validateTrigger = _options$validateTrig === undefined ? "onChange" : _options$validateTrig;

          var isReuired = false;
          if (initialValue && (0, _objTool.read)(_this3.initialValues, "" + id) !== initialValue) {
            if (Array.isArray(initialValue)) {
              if (initialValue.length) _this3.initialValue = (0, _objTool.write)(_this3.initialValue, "" + id, initialValue);
            } else {
              _this3.initialValue = (0, _objTool.write)(_this3.initialValue, "" + id, initialValue);
            }
          }

          if (rules || globalRules) {
            var allRules = Array.from(new Set((globalRules || []).concat(rules || []).filter(function (v) {
              return !ignoreRules.some(function (i) {
                return i === v;
              });
            })));
            _this3.rules["" + id] = allRules;
            isReuired = allRules.some(function (v) {
              var type = typeof v === "undefined" ? "undefined" : _typeof(v);
              switch (type) {
                case "string":
                  return v === "require";
                case "object":
                  return v.rule === "require";
                default:
                  return false;
              }
            });
          }
          return function (Coms) {
            if (Array.isArray(Coms)) {
              _this3.childNum["" + id] = Coms.length;
            }
            return Array.isArray(Coms) ? Coms.map(function (Com, i) {
              return _this3.cloneChild(Com, {
                id: id,
                wrapClass: wrapClass,
                valueName: valueName,
                trigger: trigger,
                validateTrigger: validateTrigger,
                allow: allow,
                message: message,
                errorCom: errorCom,
                isReuired: isReuired
              }, "." + i);
            }) : _this3.cloneChild(Coms, {
              id: id,
              wrapClass: wrapClass,
              valueName: valueName,
              trigger: trigger,
              validateTrigger: validateTrigger,
              allow: allow,
              message: message,
              errorCom: errorCom,
              isReuired: isReuired
            }, "");
          };
        }
      };

      this.onValueChange = function (id, i, value, data, allow) {
        _this3.setState({
          values: (0, _objTool.write)(_this3.state.values, "" + id + i, value)
        }, function () {
          if (data && allow) {
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = Object.entries(data)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var _step4$value = _slicedToArray(_step4.value, 2),
                    k = _step4$value[0],
                    v = _step4$value[1];

                _this3.state.values = (0, _objTool.write)(_this3.state.values, "" + k, v);
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }
          }
          if (onValuesChange) onValuesChange.call(_this3.ele, _this3.props, _this3.state.values);
        });
      };

      this.cloneChild = function (Com, _ref3, i) {
        var id = _ref3.id,
            wrapClass = _ref3.wrapClass,
            valueName = _ref3.valueName,
            trigger = _ref3.trigger,
            validateTrigger = _ref3.validateTrigger,
            allow = _ref3.allow,
            message = _ref3.message,
            errorCom = _ref3.errorCom,
            isReuired = _ref3.isReuired;
        var type = Com.type,
            props = Com.props;

        if (type && props) {
          if (typeof type === "function" || ["input", "select", "textarea"].some(function (v) {
            return v === type;
          })) {
            var _clone;

            if ((0, _objTool.read)(_this3.state.values, "" + id + i) === undefined) {
              _this3.state.values = (0, _objTool.write)(_this3.state.values, "" + id + i, (0, _objTool.read)(_this3.initialValue, "" + id + i));
            }
            var _onChange = props.onChange,
                _onBlur = props.onBlur;

            return _react2.default.createElement(
              "div",
              {
                isReuired: isReuired,
                className: (0, _classnames2.default)(wrapClass, "decorator-wrap", {
                  "validate-error": (0, _objTool.read)(_this3.state.errors, "" + id + i + ".length")
                })
              },
              clone(Com, (_clone = {}, _defineProperty(_clone, valueName, (0, _objTool.read)(_this3.state.values, "" + id + i)), _defineProperty(_clone, "onChange", function () {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.event;
                  var data = arguments[1];
                  var value;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          value = e.target ? (0, _objTool.read)(e, "target.value") : e;

                          if (!(trigger === "onChange")) {
                            _context.next = 4;
                            break;
                          }

                          _context.next = 4;
                          return _this3.onValueChange(id, i, value, data, allow);

                        case 4:
                          if (_onChange) _onChange(e, data);
                          if (validateTrigger === "onChange") {
                            _this3.form.validateField(id, value, i);
                          }

                        case 6:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, _this3);
                }));

                return function onChange() {
                  return _ref4.apply(this, arguments);
                };
              }()), _defineProperty(_clone, "onBlur", function () {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.event;
                  var data = arguments[1];
                  var value;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          value = (0, _objTool.read)(e, "target.value", { defaultValue: e });

                          if (!(trigger === "onBlur")) {
                            _context2.next = 4;
                            break;
                          }

                          _context2.next = 4;
                          return _this3.onValueChange(id, i, value, data, allow);

                        case 4:
                          if (_onBlur) _onBlur(e, data);
                          if (validateTrigger === "onBlur") {
                            _this3.form.validateField(id, value, i);
                          }

                        case 6:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, _this3);
                }));

                return function onBlur() {
                  return _ref5.apply(this, arguments);
                };
              }()), _defineProperty(_clone, "className", (0, _classnames2.default)("validate-error-child", props.className)), _clone)),
              _react2.default.createElement(
                "div",
                { className: "error-info" },
                _this3.form.getErrorInfo("" + id + i, message, errorCom)
              )
            );
          } else {
            return clone(Com, {}, _this3.cloneNode(props.children, { id: id, wrapClass: wrapClass, valueName: valueName, trigger: trigger, validateTrigger: validateTrigger, allow: allow, message: message, errorCom: errorCom }, i));
          }
        } else {
          return Com;
        }
      };

      this.cloneNode = function (childs, _ref6, i) {
        var id = _ref6.id,
            wrapClass = _ref6.wrapClass,
            valueName = _ref6.valueName,
            trigger = _ref6.trigger,
            validateTrigger = _ref6.validateTrigger,
            allow = _ref6.allow,
            message = _ref6.message,
            errorCom = _ref6.errorCom;

        return map(childs, function (Com) {
          return _this3.cloneChild(Com, { id: id, wrapClass: wrapClass, valueName: valueName, trigger: trigger, validateTrigger: validateTrigger, allow: allow, message: message, errorCom: errorCom }, i);
        });
      };
    }, _temp;
  };
}
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(clone, "clone", "F:/web/PersonalSite/web/src/libs/components/form/create.js");

  __REACT_HOT_LOADER__.register(map, "map", "F:/web/PersonalSite/web/src/libs/components/form/create.js");

  __REACT_HOT_LOADER__.register(create, "create", "F:/web/PersonalSite/web/src/libs/components/form/create.js");
}();

;

/***/ }),

/***/ 458:
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


/***/ })

});