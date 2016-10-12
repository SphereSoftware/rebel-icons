'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = FolderIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FolderIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M118.521 17.827H95.498c-3.228 0-5.872 2.959-5.872 6.573-.17 3.67-3.369 3.542-3.369 3.542H34.42c-3.229 0-7.426.935-8.548 6.541l-1.041 6.41H8.519c-3.044 0-5.528 2.551-5.528 5.673l10.017 57.914c1.037 4.612 5.182 5.794 9.326 5.678h87.73c-.004 0-.008-.003-.011-.003.003 0 .007.003.011.003.948-.035 1.15-1.483 1.497-3.225L124.398 24.4c.802-5.929-1.616-6.573-5.877-6.573zm-5.288 19.281l-8.536 52.966-7.415-43.508c-.719-4.017-5.009-5.762-8.979-5.673h-60.87l.566-3.777c.255-1.691 1.721-3.079 3.256-3.079h79.688c1.534 0 2.567 1.38 2.29 3.071z' })
    )
  );
}