'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('../IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M100.383 55.903h-7.367v-15.85c0-15.447-12.568-28.012-28.016-28.012S36.984 24.606 36.984 40.054v15.85h-7.368v-15.85C29.617 20.543 45.49 4.667 65 4.667c19.51 0 35.383 15.877 35.383 35.387v15.849z' }),
        _react2.default.createElement('path', { d: 'M96.699 123.264H33.301c-6.555 0-11.887-5.332-11.887-11.887V63.828c0-6.555 5.332-11.887 11.887-11.887h63.398c6.555 0 11.888 5.332 11.888 11.887v47.549c0 6.555-5.333 11.887-11.888 11.887zM33.301 59.866a3.964 3.964 0 0 0-3.962 3.962v47.549a3.964 3.964 0 0 0 3.962 3.962h63.398a3.964 3.964 0 0 0 3.963-3.962V63.828a3.964 3.964 0 0 0-3.963-3.962H33.301z' }),
        _react2.default.createElement('circle', { cx: '65', cy: '75.715', r: '7.925' }),
        _react2.default.createElement('path', { d: 'M66.981 75.715h-3.962l-3.963 23.774h11.887z' })
      )
    )
  );
};