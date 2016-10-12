'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = CSSIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CSSIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M12.24 5.5l9.517 106.737L64.461 124.1l42.825-11.872L116.813 5.5H12.24zm84.298 60.418v.037l-4.48 26.929-28.017 7.283-27.211-6.808-.934-20.28h13.139l.931 10.17 14.075 3.793 14.214-3.945 2.432-16.775H50.13l-.264-3.102-.594-6.774-.317-3.64h32.891L83.04 39.29H32.949l-.26-2.838-.598-6.9-.313-3.778h70.576l-5.816 40.144z' })
    )
  );
}