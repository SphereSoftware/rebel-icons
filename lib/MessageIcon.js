'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = MessageIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MessageIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M31.226 115.652c-.414 0-.828-.09-1.214-.274a2.788 2.788 0 0 1-1.572-2.508V94.754H13.1c-4.609 0-8.359-3.749-8.359-8.358V23.694c0-4.611 3.75-8.36 8.359-8.36h101.718c4.608 0 8.358 3.75 8.358 8.36v62.702c0 4.609-3.75 8.358-8.358 8.358H58.646l-25.692 20.301c-.5.396-1.113.597-1.728.597zM13.1 20.908a2.79 2.79 0 0 0-2.787 2.786v62.702a2.79 2.79 0 0 0 2.787 2.786h18.126a2.783 2.783 0 0 1 2.786 2.786v15.148l21.936-17.332a2.792 2.792 0 0 1 1.729-.603h57.142a2.79 2.79 0 0 0 2.786-2.786V23.694a2.79 2.79 0 0 0-2.786-2.786H13.1z' }),
      _react2.default.createElement('path', { d: 'M96.701 48.774H34.002a2.785 2.785 0 0 1-2.787-2.786 2.784 2.784 0 0 1 2.787-2.787h62.699a2.784 2.784 0 0 1 2.786 2.787 2.784 2.784 0 0 1-2.786 2.786zM96.701 65.963H34.002a2.785 2.785 0 0 1-2.787-2.786 2.785 2.785 0 0 1 2.787-2.788h62.699a2.785 2.785 0 0 1 2.786 2.788 2.784 2.784 0 0 1-2.786 2.786z' })
    )
  );
}