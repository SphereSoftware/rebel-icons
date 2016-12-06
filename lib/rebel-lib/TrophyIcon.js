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
        _react2.default.createElement('path', { d: 'M76.652 79.966c10.321-7.923 25.914-19.893 25.914-63.982V12.5H25.933v3.483c0 44.089 15.594 56.06 25.915 63.982 6.021 4.626 8.919 7.096 8.919 12.65v10.624c-5.633.568-11.124 2.612-13.103 6.793h-7.797a6.967 6.967 0 0 0-6.967 6.967h62.7a6.966 6.966 0 0 0-6.966-6.967h-7.797c-1.98-4.181-7.471-6.225-13.104-6.793V92.616c0-5.554 2.899-8.024 8.919-12.65zM64.25 81.911c-2.17-2.871-5.123-5.14-8.161-7.47-9.501-7.293-22.41-17.202-23.155-54.975h62.632c-.745 37.772-13.655 47.682-23.155 54.975-3.038 2.33-5.991 4.599-8.161 7.47z' }),
        _react2.default.createElement('path', { d: 'M42.666 71.648c-.377-.074-37.633-7.997-37.633-48.698v-3.483h24.383v6.966H12.109c2.014 32.024 31.615 38.324 31.925 38.385l-1.368 6.83zM85.834 71.648l-1.368-6.831c1.256-.258 29.966-6.514 31.929-38.385H99.083v-6.966h24.384v3.483c0 40.702-37.256 48.625-37.633 48.699z' })
      )
    )
  );
};