'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ChartsIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ChartsIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M77.565 102.21V63.032h11.319v39.178h28.717V19.758a3.905 3.905 0 0 0-3.905-3.906H92.79a3.905 3.905 0 0 0-3.905 3.906v35.463H73.66a3.905 3.905 0 0 0-3.905 3.905v43.083h7.81zm43.522 7.044H5.905A3.903 3.903 0 0 0 2 113.159a3.903 3.903 0 0 0 3.905 3.905h115.182a3.903 3.903 0 0 0 3.906-3.905 3.904 3.904 0 0 0-3.906-3.905zM15.863 102.21V87.386h11.319v14.824h28.713V49.646a3.903 3.903 0 0 0-3.905-3.905H31.087a3.905 3.905 0 0 0-3.905 3.905v29.931H11.958a3.906 3.906 0 0 0-3.906 3.905v18.729h7.811z' })
    )
  );
}