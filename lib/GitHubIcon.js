'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = GitHubIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GitHubIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { fillRule: 'evenodd', d: 'M64.996 5.837C32.419 5.837 6 32.252 6 64.841c0 26.066 16.901 48.18 40.351 55.98 2.95.542 4.026-1.278 4.026-2.842 0-1.402-.05-5.113-.081-10.037-16.409 3.564-19.874-7.909-19.874-7.909-2.681-6.814-6.549-8.631-6.549-8.631-5.358-3.66.403-3.584.403-3.584 5.923.415 9.038 6.081 9.038 6.081 5.266 9.015 13.809 6.41 17.174 4.901.534-3.814 2.059-6.415 3.741-7.891-13.098-1.486-26.873-6.549-26.873-29.158 0-6.441 2.297-11.708 6.073-15.833-.607-1.491-2.631-7.49.58-15.614 0 0 4.955-1.586 16.225 6.05 4.701-1.31 9.749-1.963 14.769-1.986 5.013.023 10.06.676 14.77 1.986 11.262-7.636 16.209-6.05 16.209-6.05 3.219 8.124 1.195 14.124.588 15.614 3.783 4.125 6.065 9.392 6.065 15.833 0 22.667-13.798 27.653-26.942 29.112 2.121 1.825 4.011 5.424 4.011 10.929 0 7.886-.077 14.25-.077 16.187 0 1.574 1.064 3.411 4.057 2.835C107.11 112.997 124 90.899 124 64.841c0-32.589-26.419-59.004-59.004-59.004z', clipRule: 'evenodd' })
    )
  );
}