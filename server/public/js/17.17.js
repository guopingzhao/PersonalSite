webpackJsonp([17],{

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function () {
  function Canvas(_ref) {
    var canvas = _ref.canvas,
        width = _ref.width,
        height = _ref.height;

    _classCallCheck(this, Canvas);

    this.canvas = canvas ? canvas : document.createElement("canvas");
    if (width) this.canvas.width = width;
    if (height) this.canvas.height = height;
    this.ctx = canvas.getContent("2d");
  }

  _createClass(Canvas, [{
    key: "clear",
    value: function clear(options) {
      var _options = _slicedToArray(options, 4),
          _options$ = _options[0],
          x0 = _options$ === undefined ? 0 : _options$,
          _options$2 = _options[1],
          y0 = _options$2 === undefined ? 0 : _options$2,
          _options$3 = _options[2],
          x1 = _options$3 === undefined ? this.canvas.width : _options$3,
          _options$4 = _options[3],
          y1 = _options$4 === undefined ? this.canvas.height : _options$4;

      this.ctx.clearRect(x0, y0, x1, y1);
    }
  }, {
    key: "chart",
    value: function chart() {
      var paths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _chart(this.ctx, paths, options);
    }
  }, {
    key: "text",
    value: function text(textOptions, options) {
      _text(this.ctx, textOptions, options);
    }
  }, {
    key: "img",
    value: function img(content, options) {
      _img(this.ctx, content, options);
    }
  }, {
    key: "arc",
    value: function arc(arcOptions, options) {
      _arc(this.ctx, arcOptions, options);
    }
  }, {
    key: "rect",
    value: function rect(spot, options) {
      _rect(this.ctx, spot, options);
    }
  }, {
    key: "setStyle",
    value: function setStyle(options) {
      _setStyle(this.ctx, options);
    }
  }]);

  return Canvas;
}();

exports.default = Canvas;
function _chart(ctx) {
  var paths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var close = options.close,
      _options$type = options.type,
      type = _options$type === undefined ? "stroke" : _options$type;

  var pt = [].concat(_toConsumableArray(paths));
  ctx.save();
  _setStyle(ctx, options);
  ctx.beginPath();
  ctx.moveTo.apply(ctx, _toConsumableArray(pt.shift()));
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = pt[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var v = _step.value;

      var l = v.length;
      if (l === 2) {
        ctx.lineTo.apply(ctx, _toConsumableArray(v));
      } else if (l === 4) {
        ctx.quadraticCurveTo.apply(ctx, _toConsumableArray(v));
      } else if (l === 5) {
        ctx.arcTo.apply(ctx, _toConsumableArray(v));
      } else {
        ctx.bezierCurveTo.apply(ctx, _toConsumableArray(v));
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

  if (close) {
    ctx.closePath();
  }
  ctx[type]();
  ctx.restore();
}

exports.chart = _chart;
function _text(ctx) {
  var textOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var font = textOptions.font,
      text = textOptions.text,
      x = textOptions.x,
      y = textOptions.y,
      textAlign = textOptions.textAlign,
      textBaseline = textOptions.textBaseline,
      _textOptions$maxWidth = textOptions.maxWidth,
      maxWidth = _textOptions$maxWidth === undefined ? ctx.measureText(text).width : _textOptions$maxWidth;
  var _options$type2 = options.type,
      type = _options$type2 === undefined ? "fill" : _options$type2;

  ctx.save();
  if (font) ctx.font = font;
  if (textAlign) ctx.textAlign = textAlign;
  if (textBaseline) ctx.textBaseline = textBaseline;

  _setStyle(ctx, options, "fill");

  ctx[type + "Text"](text, x, y, maxWidth);
  ctx.restore();
}

exports.text = _text;
function _img(ctx) {
  var imgOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var parameter = imgOptions.parameter,
      content = imgOptions.content;

  ctx.save();
  _setStyle(ctx, options);
  if (typeof content === "string") {
    var img = document.createElement("img");
    img.src = content;
    img.onload = function () {
      ctx.drawImage.apply(ctx, [img].concat(_toConsumableArray(parameter)));
      ctx.restore();
    };
  } else {
    ctx.drawImage.apply(ctx, [content].concat(_toConsumableArray(parameter)));
    ctx.restore();
  }
}

exports.img = _img;
function _arc(ctx, arcOptions) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var center = arcOptions.center,
      radius = arcOptions.radius,
      radian = arcOptions.radian,
      _options$type3 = options.type,
      type = _options$type3 === undefined ? "stroke" : _options$type3;

  ctx.save();
  _setStyle(ctx, options);

  ctx.beginPath();
  ctx.arc.apply(ctx, _toConsumableArray(center).concat([radius], _toConsumableArray(radian)));
  ctx[type]();
  ctx.restore();
}

exports.arc = _arc;
function _rect(ctx, spot) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _options$type4 = options.type,
      type = _options$type4 === undefined ? "stroke" : _options$type4;

  ctx.save();
  _setStyle(ctx, options);
  ctx.rect.apply(ctx, _toConsumableArray(spot));
  ctx[type]();
  ctx.restore();
}

exports.rect = _rect;
function _setStyle(ctx) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var defaultType = arguments[2];
  var scale = options.scale,
      origin = options.origin,
      rotate = options.rotate,
      repeat = options.repeat,
      shadow = options.shadow,
      gradient = options.gradient,
      lineCap = options.lineCap,
      lineJoin = options.lineJoin,
      lineWidth = options.lineWidth,
      miterLimit = options.miterLimit,
      _options$color = options.color,
      color = _options$color === undefined ? "#000" : _options$color,
      _options$type5 = options.type,
      type = _options$type5 === undefined ? defaultType || "stroke" : _options$type5;


  if (lineCap) ctx.lineCap = lineCap;
  if (lineJoin) ctx.lineJoin = lineJoin;
  if (lineWidth) ctx.lineWidth = lineWidth;
  if (miterLimit) ctx.miterLimit = miterLimit;

  if (scale) ctx.scale.apply(ctx, _toConsumableArray(scale));
  if (origin) ctx.translate.apply(ctx, _toConsumableArray(origin));
  if (rotate) ctx.rotate(rotate);

  if (gradient) {
    var _gradient$type = gradient.type,
        gradientType = _gradient$type === undefined ? "linear" : _gradient$type,
        _gradient$range = gradient.range,
        range = _gradient$range === undefined ? [0, 0, 0, 0] : _gradient$range,
        _gradient$colors = gradient.colors,
        colors = _gradient$colors === undefined ? [[0, "#000"]] : _gradient$colors;


    var grd = ctx["create" + gradientType.replace(/^(\w).*/, function (a, b) {
      return a.replace(/^\w/, b.toUpperCase());
    }) + "Gradient"].apply(ctx, _toConsumableArray(range));

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = colors[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var v = _step2.value;

        grd.addColorStop.apply(grd, _toConsumableArray(v));
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

    ctx[type + "Style"] = grd;
  }

  if (repeat) {
    var content = repeat.content,
        _repeat$direction = repeat.direction,
        direction = _repeat$direction === undefined ? "no-repeat" : _repeat$direction;

    var pat = void 0;
    try {
      pat = ctx.createPattern(content, direction);
    } catch (error) {
      pat = color;
    }
    ctx[type + "Style"] = pat;
  }

  if (!gradient && !repeat) {
    ctx[type + "Style"] = color;
  }

  if (shadow) {
    var _shadow$blur = shadow.blur,
        blur = _shadow$blur === undefined ? 0 : _shadow$blur,
        _shadow$offsetX = shadow.offsetX,
        offsetX = _shadow$offsetX === undefined ? 0 : _shadow$offsetX,
        _shadow$offsetY = shadow.offsetY,
        offsetY = _shadow$offsetY === undefined ? 0 : _shadow$offsetY,
        _shadow$color = shadow.color,
        _color = _shadow$color === undefined ? "#000" : _shadow$color;

    ctx.shadowBlur = blur;
    ctx.shadowOffsetX = offsetX;
    ctx.shadowOffsetY = offsetY;
    ctx.shadowColor = _color;
  }
}
exports.setStyle = _setStyle;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Canvas, "Canvas", "F:/web/PersonalSite/web/src/libs/util/canvas.js");

  __REACT_HOT_LOADER__.register(_chart, "chart", "F:/web/PersonalSite/web/src/libs/util/canvas.js");

  __REACT_HOT_LOADER__.register(_text, "text", "F:/web/PersonalSite/web/src/libs/util/canvas.js");

  __REACT_HOT_LOADER__.register(_img, "img", "F:/web/PersonalSite/web/src/libs/util/canvas.js");

  __REACT_HOT_LOADER__.register(_arc, "arc", "F:/web/PersonalSite/web/src/libs/util/canvas.js");

  __REACT_HOT_LOADER__.register(_rect, "rect", "F:/web/PersonalSite/web/src/libs/util/canvas.js");

  __REACT_HOT_LOADER__.register(_setStyle, "setStyle", "F:/web/PersonalSite/web/src/libs/util/canvas.js");
}();

;

/***/ })

});