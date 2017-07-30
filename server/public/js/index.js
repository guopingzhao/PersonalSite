webpackJsonp([3],{

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var APP_SET_LOCALE = exports.APP_SET_LOCALE = "APP_SET_LOCALE";

var _default = function _default(locale) {
  return function (dispatch) {
    dispatch({
      type: APP_SET_LOCALE,
      data: locale
    });
  };
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(APP_SET_LOCALE, "APP_SET_LOCALE", "F:/web/PersonalSite/web/src/components/app/actions/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "F:/web/PersonalSite/web/src/components/app/actions/index.js");
}();

;

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(185);

__webpack_require__(186);

__webpack_require__(191);

__webpack_require__(192);

__webpack_require__(193);

__webpack_require__(194);

__webpack_require__(195);

__webpack_require__(196);

__webpack_require__(197);

__webpack_require__(198);

__webpack_require__(199);

__webpack_require__(201);

__webpack_require__(202);

__webpack_require__(203);

__webpack_require__(204);

__webpack_require__(205);

__webpack_require__(207);

__webpack_require__(208);

__webpack_require__(209);

__webpack_require__(210);

__webpack_require__(211);

__webpack_require__(212);

__webpack_require__(213);

__webpack_require__(214);

__webpack_require__(215);

__webpack_require__(216);

__webpack_require__(217);

__webpack_require__(218);

__webpack_require__(220);

__webpack_require__(225);

__webpack_require__(226);

__webpack_require__(227);

__webpack_require__(228);

__webpack_require__(229);

__webpack_require__(230);

__webpack_require__(231);

__webpack_require__(233);

__webpack_require__(234);

__webpack_require__(235);

__webpack_require__(236);

__webpack_require__(237);

__webpack_require__(239);

__webpack_require__(240);

__webpack_require__(241);

__webpack_require__(242);

__webpack_require__(243);

__webpack_require__(244);

__webpack_require__(245);

__webpack_require__(246);

__webpack_require__(247);

__webpack_require__(248);

__webpack_require__(93);

__webpack_require__(249);

__webpack_require__(250);

__webpack_require__(251);

__webpack_require__(252);

__webpack_require__(253);

__webpack_require__(254);

__webpack_require__(255);

__webpack_require__(256);

__webpack_require__(257);

__webpack_require__(258);

__webpack_require__(259);

__webpack_require__(260);

__webpack_require__(261);

__webpack_require__(262);

__webpack_require__(263);

__webpack_require__(264);

__webpack_require__(265);

__webpack_require__(266);

__webpack_require__(267);

__webpack_require__(268);

__webpack_require__(269);

__webpack_require__(270);

__webpack_require__(271);

__webpack_require__(272);

__webpack_require__(273);

__webpack_require__(274);

__webpack_require__(275);

__webpack_require__(276);

__webpack_require__(277);

__webpack_require__(278);

__webpack_require__(279);

__webpack_require__(282);

__webpack_require__(283);

__webpack_require__(284);

__webpack_require__(285);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(302);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(383);

var _reactRedux = __webpack_require__(124);

var _reactRouterDom = __webpack_require__(125);

var _store = __webpack_require__(402);

var _store2 = _interopRequireDefault(_store);

var _quickclick = __webpack_require__(409);

var _quickclick2 = _interopRequireDefault(_quickclick);

var _app = __webpack_require__(410);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _quickclick2.default)(document.body);

function render(Comp) {
  _reactDom2.default.render(_react2.default.createElement(
    _reactHotLoader.AppContainer,
    null,
    _react2.default.createElement(
      _reactRedux.Provider,
      { store: _store2.default },
      _react2.default.createElement(
        _reactRouterDom.HashRouter,
        null,
        _react2.default.createElement(Comp, null)
      )
    )
  ), document.getElementById("root"));
}

render(_app2.default);

if (false) {
  module.hot.accept("components/app", function () {
    return render(_app2.default);
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(render, "render", "F:/web/PersonalSite/web/src/index.js");
}();

;

/***/ }),

/***/ 285:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatch = undefined;

var _redux = __webpack_require__(80);

var _reduxThunk = __webpack_require__(403);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouterRedux = __webpack_require__(404);

var _reducers = __webpack_require__(407);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)((0, _redux.combineReducers)({
  routerReducer: _reactRouterRedux.routerReducer,
  app: _reducers2.default
}), (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), window.devToolsExtension ? window.devToolsExtension() : function (f) {
  return f;
}));

var dispatch = exports.dispatch = store.dispatch.bind(store);

var _default = store;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(store, "store", "F:/web/PersonalSite/web/src/store.js");

  __REACT_HOT_LOADER__.register(dispatch, "dispatch", "F:/web/PersonalSite/web/src/store.js");

  __REACT_HOT_LOADER__.register(_default, "default", "F:/web/PersonalSite/web/src/store.js");
}();

;

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutabilityHelper = __webpack_require__(408);

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

var _actions = __webpack_require__(180);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  locale: "zh"
};

var handlers = _defineProperty({}, _actions.APP_SET_LOCALE, function (state, data) {
  return (0, _immutabilityHelper2.default)(state, {
    $set: {
      locale: data
    }
  });
});

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];
  var type = action.type,
      data = action.data;

  if (!handlers[type]) return state;
  return handlers[type](state, data);
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, "initialState", "F:/web/PersonalSite/web/src/components/app/reducers/index.js");

  __REACT_HOT_LOADER__.register(handlers, "handlers", "F:/web/PersonalSite/web/src/components/app/reducers/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "F:/web/PersonalSite/web/src/components/app/reducers/index.js");
}();

;

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(125);

var _redux = __webpack_require__(80);

var _reactRedux = __webpack_require__(124);

var _reactIntl = __webpack_require__(183);

var _en = __webpack_require__(433);

var _en2 = _interopRequireDefault(_en);

var _zh = __webpack_require__(434);

var _zh2 = _interopRequireDefault(_zh);

var _my = __webpack_require__(435);

var _my2 = _interopRequireDefault(_my);

var _actions = __webpack_require__(180);

var _actions2 = _interopRequireDefault(_actions);

var _langs = __webpack_require__(436);

var _langs2 = _interopRequireDefault(_langs);

var _lazy = __webpack_require__(439);

var _lazy2 = _interopRequireDefault(_lazy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(0, _reactIntl.addLocaleData)([].concat(_toConsumableArray(_en2.default), _toConsumableArray(_zh2.default), _toConsumableArray(_my2.default)));

var Home = function Home(props) {
  return _react2.default.createElement(
    _lazy2.default,
    { load: function load() {
        return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 440));
      } },
    function (Home) {
      return _react2.default.createElement(Home, props);
    }
  );
};
var Blog = function Blog(props) {
  return _react2.default.createElement(
    _lazy2.default,
    { load: function load() {
        return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 441));
      } },
    function (Blog) {
      return _react2.default.createElement(Blog, props);
    }
  );
};
var ChatRoom = function ChatRoom(props) {
  return _react2.default.createElement(
    _lazy2.default,
    { load: function load() {
        return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 442));
      } },
    function (ChatRoom) {
      return _react2.default.createElement(ChatRoom, props);
    }
  );
};

var App = (_dec = (0, _reactRedux.connect)(function (_ref) {
  var app = _ref.app;
  return {
    locale: app.locale
  };
}), (0, _reactRouterDom.withRouter)(_class = _dec(_class = function (_PureComponent) {
  _inherits(App, _PureComponent);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var locale = this.props.locale;

      return _react2.default.createElement(
        _reactIntl.IntlProvider,
        { locale: locale, messages: _langs2.default[locale] },
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_reactRouterDom.Route, { path: "/home", component: Home }),
          _react2.default.createElement(_reactRouterDom.Route, { path: "/blog", component: Blog }),
          _react2.default.createElement(_reactRouterDom.Route, { path: "/chat", component: ChatRoom })
        )
      );
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props$history = this.props.history,
          replace = _props$history.replace,
          location = _props$history.location,
          push = _props$history.push;

      if (location.pathname.replace(/^\//, "")) {
        replace(location);
      } else {
        push("/home");
      }
    }
  }]);

  return App;
}(_react.PureComponent)) || _class) || _class);
exports.default = App;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Home, "Home", "F:/web/PersonalSite/web/src/components/app/index.js");

  __REACT_HOT_LOADER__.register(Blog, "Blog", "F:/web/PersonalSite/web/src/components/app/index.js");

  __REACT_HOT_LOADER__.register(ChatRoom, "ChatRoom", "F:/web/PersonalSite/web/src/components/app/index.js");

  __REACT_HOT_LOADER__.register(App, "App", "F:/web/PersonalSite/web/src/components/app/index.js");
}();

;

/***/ }),

/***/ 411:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 419:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 426:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _zh = __webpack_require__(437);

var _zh2 = _interopRequireDefault(_zh);

var _en = __webpack_require__(438);

var _en2 = _interopRequireDefault(_en);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = { zh: _zh2.default, en: _en2.default };
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "F:/web/PersonalSite/web/src/libs/langs/index.js");
}();

;

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _default = {
  MyBlog: "我的博客",
  ChatRoom: "聊天室"
};
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "F:/web/PersonalSite/web/src/libs/langs/zh.js");
}();

;

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _default = {
  MyBlog: "my blog",
  ChatRoom: "chat room"
};
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "F:/web/PersonalSite/web/src/libs/langs/en.js");
}();

;

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lazy = function (_PureComponent) {
  _inherits(Lazy, _PureComponent);

  function Lazy() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Lazy);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Lazy.__proto__ || Object.getPrototypeOf(Lazy)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      modules: null
    }, _this.load = function (props) {
      _this.state.modules = null;
      props.load().then(function (modules) {
        _this.setState({
          modules: modules.default ? modules.default : modules
        });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Lazy, [{
    key: "render",
    value: function render() {
      var modules = this.state.modules;

      return modules ? this.props.children(modules, this.props) : null;
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.load(this.props);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.load !== this.props.load) this.load(nextProps);
    }
  }]);

  return Lazy;
}(_react.PureComponent);

exports.default = Lazy;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Lazy, "Lazy", "F:/web/PersonalSite/web/src/libs/components/lazy/index.js");
}();

;

/***/ })

},[184]);