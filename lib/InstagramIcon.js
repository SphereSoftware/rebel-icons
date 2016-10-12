'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = InstagramIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InstagramIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { fillRule: 'evenodd', d: 'M109.75 55.746H99.568c.742 2.878 1.182 5.889 1.182 9.004 0 19.881-16.119 36-36 36s-36-16.119-36-36c0-3.116.439-6.126 1.187-9.004H19.75v49.504a4.5 4.5 0 0 0 4.5 4.496h81a4.5 4.5 0 0 0 4.5-4.496V55.746zm0-31.496c0-2.487-2.013-4.5-4.5-4.5h-13.5a4.498 4.498 0 0 0-4.5 4.5v13.5a4.5 4.5 0 0 0 4.5 4.5h13.5a4.5 4.5 0 0 0 4.5-4.5v-13.5zm-45 18c-12.428 0-22.5 10.072-22.5 22.5 0 12.424 10.072 22.5 22.5 22.5s22.5-10.076 22.5-22.5c0-12.428-10.072-22.5-22.5-22.5m45 81h-90c-7.458 0-13.5-6.047-13.5-13.504V19.75c0-7.458 6.042-13.5 13.5-13.5h90c7.457 0 13.5 6.042 13.5 13.5v89.996c0 7.457-6.043 13.504-13.5 13.504', clipRule: 'evenodd' })
    )
  );
}