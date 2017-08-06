webpackJsonp([21],{

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

/***/ })

});