'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = YouTubeIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function YouTubeIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M122.326 40.953s-1.147-8.097-4.671-11.662c-4.467-4.682-9.478-4.705-11.772-4.976-16.443-1.189-41.11-1.189-41.11-1.189h-.046s-24.667 0-41.11 1.189c-2.295.271-7.305.294-11.773 4.976-3.522 3.565-4.67 11.662-4.67 11.662S6 50.461 6 59.97v8.522C6 78 7.174 87.509 7.174 87.509s1.147 8.098 4.67 11.662c4.468 4.682 10.343 4.532 12.959 5.022 9.397.902 39.947 1.182 39.947 1.182s24.689-.038 41.133-1.224c2.295-.275 7.306-.299 11.772-4.98 3.523-3.564 4.671-11.662 4.671-11.662S123.5 78 123.5 68.492V59.97c0-9.509-1.174-19.017-1.174-19.017zM52.618 79.688l-.004-33.017 31.75 16.565-31.746 16.452z' })
    )
  );
}