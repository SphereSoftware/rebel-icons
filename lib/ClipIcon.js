'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ClipIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ClipIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M27.851 115.334a20.578 20.578 0 0 1-14.649-6.07 20.574 20.574 0 0 1-6.065-14.645 20.58 20.58 0 0 1 6.065-14.648l59.284-59.284c10.801-10.797 28.376-10.8 39.177 0 5.233 5.231 8.112 12.189 8.112 19.589s-2.879 14.357-8.112 19.588l-44.465 44.46-4.592-4.594 44.461-44.462c8.267-8.268 8.267-21.719 0-29.987-8.262-8.266-21.72-8.269-29.989 0L17.797 84.566a14.118 14.118 0 0 0-4.165 10.053c0 3.797 1.48 7.365 4.165 10.051 5.543 5.547 14.563 5.539 20.104 0l44.464-44.462c2.818-2.818 2.818-7.406 0-10.227-2.817-2.82-7.409-2.818-10.228.001L42.5 79.627l-4.599-4.6 29.645-29.64c5.35-5.351 14.063-5.354 19.415 0 5.353 5.354 5.353 14.063 0 19.416L42.5 109.264c-3.917 3.914-9.116 6.07-14.649 6.07z' })
    )
  );
}