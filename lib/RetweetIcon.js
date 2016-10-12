'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = RetweetIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RetweetIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M106.438 96.272h-6.49V37.858a3.25 3.25 0 0 0-3.245-3.246h-55.17v-6.49h55.17c5.368 0 9.735 4.367 9.735 9.736v58.414z' }),
        _react2.default.createElement('path', { d: 'M103.193 100.913L81.431 75.521l4.582-3.93 17.18 20.042 17.18-20.042 4.583 3.93zM86.967 99.519h-55.17c-5.369 0-9.736-4.367-9.736-9.736V31.368h6.491v58.415a3.25 3.25 0 0 0 3.245 3.245h55.169v6.491z' }),
        _react2.default.createElement('path', { d: 'M42.487 56.049l-17.18-20.042L8.126 56.049 3.544 52.12l21.763-25.392L47.07 52.12z' })
      )
    )
  );
}