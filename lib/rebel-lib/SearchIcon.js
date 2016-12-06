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
        _react2.default.createElement('path', { d: 'M54.192 99.748c-25.606 0-46.442-20.836-46.442-46.442S28.586 6.863 54.192 6.863c25.61 0 46.446 20.836 46.446 46.442S79.803 99.748 54.192 99.748zm0-86.206c-21.923 0-39.76 17.84-39.76 39.764 0 21.924 17.837 39.764 39.76 39.764 21.927 0 39.764-17.84 39.764-39.764 0-21.924-17.837-39.764-39.764-39.764zM89.06 83.092l32.327 32.327-5.08 5.079-32.326-32.326z' })
      )
    )
  );
};