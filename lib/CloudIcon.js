'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = CloudIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CloudIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M111.398 59.813c.209-1.203.34-2.436.34-3.702 0-12.111-9.821-21.93-21.936-21.93a21.777 21.777 0 0 0-11.334 3.181c-5.599-7.448-14.505-12.266-24.538-12.266-16.188 0-29.437 12.537-30.589 28.43C12.93 56.457 5.295 66.017 5.295 77.368c0 13.678 11.09 24.771 24.771 24.771h72.084c12.251 0 22.18-9.935 22.18-22.183-.001-8.945-5.305-16.632-12.932-20.143z' })
    )
  );
}