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
        _react2.default.createElement('path', { d: 'M64.391 117.499c-29.458 0-53.427-23.97-53.427-53.427s23.969-53.431 53.427-53.431c22.16 0 41.426 13.982 49.076 35.619l-7.247 2.558C99.57 30.01 83.541 18.332 64.391 18.332c-25.221 0-45.744 20.519-45.744 45.739S39.17 109.81 64.391 109.81c17.827 0 34.153-10.471 41.595-26.685l6.988 3.205c-8.692 18.934-27.762 31.169-48.583 31.169z' }),
        _react2.default.createElement('path', { d: 'M118.107 51.675H85.051v-8.264h24.792V18.618h8.264z' })
      )
    )
  );
};