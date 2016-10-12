'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = PictureIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PictureIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M113.137 109.627H14.863c-5.806 0-10.529-4.723-10.529-10.529V28.902c0-5.806 4.723-10.529 10.529-10.529h98.273c5.807 0 10.529 4.723 10.529 10.529v70.195c.001 5.807-4.722 10.53-10.528 10.53zM14.863 25.393a3.513 3.513 0 0 0-3.51 3.51v70.195a3.514 3.514 0 0 0 3.51 3.51h98.273a3.514 3.514 0 0 0 3.51-3.51V28.902a3.513 3.513 0 0 0-3.51-3.51H14.863z' }),
        _react2.default.createElement('path', { d: 'M81.549 60.245c-7.605 0-13.792-6.188-13.792-13.794s6.187-13.794 13.792-13.794 13.792 6.188 13.792 13.794-6.187 13.794-13.792 13.794zm0-21.058c-4.007 0-7.267 3.258-7.267 7.265s3.26 7.265 7.267 7.265 7.267-3.258 7.267-7.265-3.26-7.265-7.267-7.265zM100.369 108.496L42.928 54.429 10.065 84.942l-4.442-4.785 37.332-34.664 61.891 58.245z' }),
        _react2.default.createElement('path', { d: 'M118.106 90.673L99.098 75.225 83.026 88.284l-4.12-5.066 20.192-16.404 23.129 18.793z' })
      )
    )
  );
}