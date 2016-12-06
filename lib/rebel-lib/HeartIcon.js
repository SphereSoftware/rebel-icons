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
      _react2.default.createElement('path', { d: 'M64.678 114.331l-2.084-1.62c-45.68-35.597-58.05-48.125-58.05-68.474 0-16.733 14.229-30.345 31.718-30.345 14.618 0 22.88 7.937 28.416 13.91 5.54-5.974 13.802-13.91 28.417-13.91 17.489 0 31.722 13.612 31.722 30.345 0 20.348-12.373 32.877-58.05 68.474l-2.089 1.62zm-28.416-94.12c-13.847 0-25.11 10.779-25.11 24.026 0 17.434 11.471 29.089 53.526 61.938 42.062-32.85 53.53-44.504 53.53-61.938 0-13.247-11.267-24.026-25.113-24.026-12.682 0-19.293 7.22-24.611 13.031l-3.805 4.083-3.802-4.083c-5.314-5.811-11.933-13.031-24.615-13.031z' })
    )
  );
};