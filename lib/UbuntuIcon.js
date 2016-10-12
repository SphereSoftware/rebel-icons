'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = UbuntuIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UbuntuIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M64.745 4.5C32.021 4.5 5.49 31.028 5.49 63.755c0 32.721 26.531 59.255 59.255 59.255S124 96.476 124 63.755C124 31.028 97.469 4.5 64.745 4.5zM78.04 24.907a7.909 7.909 0 1 1 13.7 7.908 7.909 7.909 0 0 1-10.805 2.894 7.911 7.911 0 0 1-2.895-10.802zm-13.295 4.48c3.181 0 6.257.441 9.179 1.25a11.097 11.097 0 0 0 5.412 7.846 11.088 11.088 0 0 0 9.487.765c5.847 5.754 9.654 13.576 10.21 22.292l-11.274.164C86.72 49.901 76.815 40.646 64.745 40.646a22.97 22.97 0 0 0-9.734 2.15l-5.498-9.852a34.27 34.27 0 0 1 15.232-3.557zM24.453 71.666a7.911 7.911 0 0 1 0-15.822 7.912 7.912 0 1 1 0 15.822zm7.013.703a11.087 11.087 0 0 0 4.097-8.614c0-3.477-1.598-6.578-4.097-8.618 2.141-8.281 7.291-15.35 14.211-19.978l5.785 9.691c-5.942 4.178-9.824 11.086-9.824 18.904s3.881 14.727 9.824 18.904l-5.785 9.691c-6.923-4.623-12.073-11.696-14.211-19.98zm57.379 33.128a7.905 7.905 0 0 1-10.802-2.895c-2.185-3.782-.889-8.617 2.895-10.805 3.782-2.185 8.62-.882 10.802 2.895a7.907 7.907 0 0 1-2.895 10.805zm-.022-17.235a11.064 11.064 0 0 0-9.487.766 11.091 11.091 0 0 0-5.412 7.846 34.347 34.347 0 0 1-9.179 1.25 34.249 34.249 0 0 1-15.229-3.558l5.495-9.852a23.018 23.018 0 0 0 9.734 2.15c12.073 0 21.975-9.253 23.011-21.061l11.277.166c-.555 8.715-4.359 16.539-10.21 22.293z' })
    )
  );
}