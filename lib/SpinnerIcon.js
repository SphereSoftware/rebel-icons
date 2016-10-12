'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = SpinnerIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SpinnerIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M120.437 60.151c-.982-20.347-13.31-39.686-31.953-48.152-20.123-9.137-44.524-5.318-61.295 8.876C11.256 34.357 3.776 56.103 8.319 76.496c4.509 20.246 19.958 36.673 40.069 42.047 23.786 6.36 45.512-4.883 58.867-24.46-12.117 16.168-30.385 26.845-51.089 23.269-20.394-3.524-37.138-19.054-41.802-39.261-4.965-21.516 4.969-44.068 24.166-54.98 19.908-11.315 47.483-7.136 60.737 12.268 3.305 4.837 5.623 10.405 6.831 16.126 1.028 4.857.597 9.71 1.311 14.554.632 4.265 4.401 10.198 9.323 7.009 4.258-2.764 3.977-8.519 3.705-12.917-.059-1.222.151 2.446 0 0z' })
    )
  );
}