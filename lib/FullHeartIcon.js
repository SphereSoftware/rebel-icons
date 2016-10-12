'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = FullHeartIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FullHeartIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M93.095 13.893c-14.614 0-22.877 7.937-28.417 13.91-5.536-5.974-13.798-13.91-28.416-13.91-17.489 0-31.718 13.612-31.718 30.345 0 20.348 12.37 32.877 58.05 68.474l2.084 1.62 2.088-1.62c45.677-35.597 58.05-48.125 58.05-68.474 0-16.734-14.232-30.345-31.721-30.345zm7.919 19.026c-2.541-2.45-5.819-3.857-9.203-3.698h-.04a1.94 1.94 0 0 1-.041-3.877c4.477.014 8.688 1.61 11.978 4.794 3.613 3.499 5.725 8.526 5.792 13.801a19.09 19.09 0 0 1-.788 5.752 1.94 1.94 0 0 1-2.412 1.303 1.933 1.933 0 0 1-1.299-2.413c.436-1.465.646-3.008.622-4.595-.052-4.246-1.733-8.279-4.609-11.067z' })
    )
  );
}