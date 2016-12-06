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
      _react2.default.createElement('path', { d: 'M122.942 36.733c-.525 11.524-8.562 27.309-24.104 47.345-16.068 20.928-29.664 31.389-40.789 31.389-6.886 0-12.717-6.368-17.481-19.114-3.18-11.683-6.356-23.366-9.541-35.049-3.535-12.742-7.328-19.119-11.383-19.119-.884 0-3.98 1.863-9.278 5.577l-5.56-7.178a1499.57 1499.57 0 0 0 17.248-15.409c7.782-6.735 13.621-10.278 17.514-10.637 9.199-.884 14.859 5.414 16.984 18.898 2.297 14.55 3.885 23.599 4.781 27.142 2.651 12.07 5.569 18.102 8.753 18.102 2.476 0 6.189-3.918 11.145-11.745 4.952-7.832 7.603-13.788 7.957-17.881.709-6.761-1.946-10.145-7.957-10.145-2.83 0-5.747.65-8.748 1.938 5.81-19.061 16.909-28.322 33.29-27.792 12.147.358 17.87 8.248 17.169 23.678z' })
    )
  );
};