'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = NoEyeIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NoEyeIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M64.43 102.85c-40.339 0-58.577-35.551-59.334-37.062a3.283 3.283 0 0 1 0-2.933C5.853 61.34 24.091 25.79 64.43 25.79s58.577 35.55 59.334 37.065c.462.923.462 2.01 0 2.933-.757 1.511-18.995 37.062-59.334 37.062zM11.781 64.321c3.807 6.462 20.858 31.971 52.649 31.971s48.842-25.509 52.649-31.971c-3.808-6.461-20.858-31.973-52.649-31.973S15.588 57.86 11.781 64.321z' }),
        _react2.default.createElement('path', { d: 'M64.43 95.8c-17.357 0-31.478-14.121-31.478-31.479 0-17.356 14.121-31.481 31.478-31.481 17.356 0 31.478 14.125 31.478 31.481C95.907 81.679 81.786 95.8 64.43 95.8zm0-56.402c-13.742 0-24.923 11.181-24.923 24.923s11.181 24.92 24.923 24.92 24.924-11.178 24.924-24.92S78.172 39.398 64.43 39.398z' }),
        _react2.default.createElement('path', { d: 'M64.43 81.699c-9.584 0-17.377-7.794-17.377-17.378a3.278 3.278 0 1 1 6.554 0c0 5.97 4.857 10.82 10.823 10.82s10.823-4.851 10.823-10.82-4.857-10.823-10.823-10.823a3.28 3.28 0 0 1 0-6.558c9.584 0 17.378 7.797 17.378 17.381S74.014 81.699 64.43 81.699z' })
      ),
      _react2.default.createElement('path', { fill: 'currentColor', strokeMiterlimit: '10', strokeWidth: '4', d: 'M11.499 124.958L120.366 2.042' })
    )
  );
}