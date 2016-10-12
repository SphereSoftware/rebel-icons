'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = PointerIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PointerIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M98.379 122.45h-47.2a3.933 3.933 0 0 1-3.933-3.934c0-6.05-2.889-9.549-7.26-14.846-2.428-2.935-5.178-6.265-7.882-10.613-7.452-11.984-13.897-25.755-15.496-31.167-1.559-5.27-.515-8.658.868-10.509 1.767-2.362 4.656-3.665 8.136-3.665 4.602 0 9.626 3.949 13.767 9.05V16.25c0-6.507 5.293-11.8 11.8-11.8 6.507 0 11.8 5.293 11.8 11.8v16.41a11.716 11.716 0 0 1 3.934-.676c4.171 0 7.843 2.174 9.948 5.451a11.744 11.744 0 0 1 5.785-1.517c5.431 0 10.025 3.691 11.385 8.696a11.732 11.732 0 0 1 4.348-.83c6.508 0 11.801 5.293 11.801 11.8v11.8c0 10.037-2.044 18.326-4.025 26.343-1.975 7.985-3.842 15.525-3.842 24.79a3.933 3.933 0 0 1-3.934 3.933zm-43.566-7.866h39.741c.438-8.481 2.228-15.719 3.964-22.748 1.951-7.904 3.795-15.376 3.795-24.452V54.796a3.936 3.936 0 0 0-3.934-3.933 3.94 3.94 0 0 0-3.933 3.933v4.721a3.934 3.934 0 0 1-7.868 0V46.929a3.936 3.936 0 0 0-3.933-3.933 3.941 3.941 0 0 0-3.934 3.933v8.654a3.935 3.935 0 0 1-7.868 0V42.996a3.935 3.935 0 0 0-3.933-3.933 3.941 3.941 0 0 0-3.934 3.933v8.654a3.933 3.933 0 0 1-7.867 0V15.463a3.936 3.936 0 0 0-3.934-3.934 3.941 3.941 0 0 0-3.933 3.934V75.25a3.934 3.934 0 1 1-7.867 0v-3.23c-3.457-9.053-11.155-16.828-13.767-16.828-.914 0-1.537.207-1.836.895-.223.515-.43 1.705.1 3.499 1.229 4.156 7.252 16.993 14.912 29.323 2.427 3.896 4.886 6.872 7.26 9.753 4.106 4.959 7.732 9.354 8.769 15.922z' })
    )
  );
}