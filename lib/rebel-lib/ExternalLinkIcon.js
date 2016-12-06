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
        _react2.default.createElement('path', { d: 'M59.413 74.556l-5.469-5.473 62.41-62.411 5.47 5.477z' }),
        _react2.default.createElement('path', { d: 'M123.25 46.857h-8.321V13.571H81.643V5.25h41.607zM102.446 121.75H19.232c-6.883 0-12.482-5.599-12.482-12.482V26.054c0-6.883 5.599-12.482 12.482-12.482H65v8.322H19.232a4.167 4.167 0 0 0-4.161 4.161v83.214a4.164 4.164 0 0 0 4.161 4.161h83.214a4.164 4.164 0 0 0 4.161-4.161V63.5h8.321v45.768c.001 6.883-5.599 12.482-12.482 12.482z' })
      )
    )
  );
};