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
      _react2.default.createElement('path', { d: 'M97.444 67.827c.169 18.102 15.883 24.128 16.056 24.201-.132.43-2.512 8.59-8.277 17.018-4.987 7.283-10.158 14.547-18.311 14.697-8.006.147-10.584-4.748-19.743-4.748-9.155 0-12.016 4.598-19.596 4.896-7.874.297-13.86-7.882-18.887-15.138-10.276-14.856-18.124-41.969-7.584-60.272 5.237-9.085 14.594-14.844 24.752-14.991 7.727-.151 15.021 5.196 19.743 5.196 4.72 0 13.585-6.427 22.901-5.483 3.9.162 14.844 1.576 21.877 11.866-.565.353-13.063 7.624-12.931 22.758M82.395 23.376c4.18-5.057 6.985-12.097 6.221-19.097-6.022.239-13.301 4.014-17.62 9.063-3.87 4.477-7.26 11.638-6.346 18.505 6.709.519 13.566-3.41 17.745-8.471' })
    )
  );
};