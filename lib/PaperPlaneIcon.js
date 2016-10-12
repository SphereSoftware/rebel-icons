'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = PaperPlaneIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PaperPlaneIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M113.216 13.415L6.192 55.869c-3.394 1.344-3.205 6.207.28 7.286l26.977 8.354 10.94 33.852c.868 2.691 4.236 3.567 6.308 1.646l15.852-14.719 30.064 22.133c2.238 1.646 5.429.469 6.059-2.238l20.926-89.828c1.415-6.075-4.579-11.24-10.382-8.94zM50.557 78.55L47.22 98.568l-7.731-28.025 75.54-49.288L50.557 78.55z' })
    )
  );
}