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
        _react2.default.createElement('path', { d: 'M63.858 116.75c-20.627 0-39.52-12.121-48.131-30.877l6.924-3.175c7.372 16.063 23.546 26.437 41.207 26.437 24.985 0 45.317-20.328 45.317-45.313S88.843 18.509 63.858 18.509c-18.973 0-34.851 11.569-41.439 30.202l-7.18-2.535c7.58-21.435 26.664-35.287 48.619-35.287 29.182 0 52.928 23.75 52.928 52.932 0 29.183-23.746 52.929-52.928 52.929z' }),
        _react2.default.createElement('path', { d: 'M43.39 51.541H10.642V18.793h8.187v24.561H43.39z' })
      )
    )
  );
};