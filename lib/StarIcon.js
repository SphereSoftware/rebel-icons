'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = StarIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function StarIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M99.586 121.525a3.012 3.012 0 0 1-1.773-.578L64.419 96.686l-33.393 24.262a3.013 3.013 0 0 1-3.548 0 3.02 3.02 0 0 1-1.095-3.376l12.752-39.255L5.744 54.058a3.022 3.022 0 0 1-1.095-3.376 3.018 3.018 0 0 1 2.869-2.086h41.274L61.55 9.344a3.014 3.014 0 0 1 5.738 0l12.756 39.251h41.274c1.307 0 2.465.843 2.868 2.086a3.019 3.019 0 0 1-1.092 3.376L89.702 78.316l12.753 39.255a3.027 3.027 0 0 1-1.096 3.376 3.028 3.028 0 0 1-1.773.578zM64.419 89.94c.622 0 1.243.191 1.77.577l27.655 20.09-10.559-32.51a3.006 3.006 0 0 1 1.092-3.372l27.651-20.09H77.851a3.017 3.017 0 0 1-2.869-2.086L64.419 20.041 53.857 52.55a3.025 3.025 0 0 1-2.873 2.086H16.803l27.655 20.09a3.012 3.012 0 0 1 1.095 3.372l-10.562 32.51 27.655-20.09a2.991 2.991 0 0 1 1.773-.578z' })
    )
  );
}