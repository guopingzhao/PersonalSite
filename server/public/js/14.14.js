webpackJsonp([14,22],{

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

/***/ })

});