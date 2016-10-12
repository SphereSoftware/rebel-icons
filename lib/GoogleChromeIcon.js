'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = GoogleChromeIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GoogleChromeIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M42.946 63.31c0 11.42 9.26 20.677 20.677 20.677S84.301 74.73 84.301 63.31c0-11.417-9.261-20.674-20.678-20.674-11.417-.001-20.677 9.256-20.677 20.674z' }),
        _react2.default.createElement('path', { d: 'M63.964 40h49.501C104.381 18 85.472 8.383 63.623 8.383c-17.692 0-33.452 7.937-43.634 20.814l19.296 33.324C40.229 49.82 49.351 40 63.964 40z' }),
        _react2.default.createElement('path', { d: 'M115.238 43H77.027c6.759 3 11.235 11.282 11.235 19.949 0 4.26-1.084 8.051-2.985 11.051h.012l-25.357 44.237c1.221.073 2.453.392 3.691.392 30.704 0 55.59-24.567 55.59-55.269 0-7.312-1.412-14.36-3.975-20.36z' }),
        _react2.default.createElement('path', { d: 'M63.623 87.948c-10.663 0-19.743-6.771-23.172-16.249L17.442 32.353C11.499 41.202 8.033 51.85 8.033 63.31c0 27.983 20.674 51.132 47.581 55.015l19.18-33.047a24.535 24.535 0 0 1-11.171 2.67z' })
      )
    )
  );
}