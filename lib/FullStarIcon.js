'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = FullStarIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FullStarIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M124.187 50.884c-.403-1.243-1.562-1.884-2.868-1.884H80.044L67.288 9.546c-.403-1.243-1.565-2.188-2.869-2.188-1.31 0-2.466.995-2.869 2.238L48.792 49H7.518c-1.307 0-2.466.641-2.869 1.884-.403 1.243.037 2.506 1.095 3.275l33.393 24.208-12.752 39.229a3.001 3.001 0 0 0 1.095 3.363 3.014 3.014 0 0 0 3.548-.007l33.393-24.265 33.393 24.261a3.01 3.01 0 0 0 3.546-.002 3.027 3.027 0 0 0 1.096-3.376L89.702 78.316l33.393-24.157c1.054-.769 1.499-2.032 1.092-3.275z' })
    )
  );
}