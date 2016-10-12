'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = WordPressIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function WordPressIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'g',
        { 'fill-rule': 'evenodd', 'clip-rule': 'evenodd' },
        _react2.default.createElement('path', { d: 'M64.084 120.206c30.965-.049 56.031-25.235 56.031-56.306 0-30.563-24.951-55.737-54.76-56.27-31.303-.556-57.458 24.846-57.47 55.65-.01 31.688 24.948 56.971 56.199 56.926zm-.09-109.85c29.728-.009 53.414 24.143 53.404 54.458-.009 28.62-24.324 52.561-53.383 52.566-29.604.007-53.411-23.997-53.411-53.849 0-29.086 24.18-53.166 53.39-53.175z' }),
        _react2.default.createElement('path', { d: 'M41.557 38.604c.484 1.619-.875 2.184-2.32 2.293-1.525.121-3.043.233-4.813.369 5.835 17.373 11.58 34.496 17.461 52.01.417-.687.59-.88.666-1.104 3.23-9.649 6.477-19.294 9.625-28.971.285-.883.142-2.051-.172-2.958-1.664-4.807-3.66-9.508-5.119-14.372-.998-3.331-2.323-5.481-6.259-5.098-.668.064-1.491-1.376-2.238-2.124.907-.538 1.809-1.537 2.723-1.552a777.405 777.405 0 0 1 24.049.006c.92.015 1.818 1.041 2.729 1.594-.795.729-1.479 1.818-2.41 2.1-1.492.448-3.146.363-4.932.523 5.839 17.367 11.557 34.38 17.482 51.998 2.646-8.793 5.112-16.87 7.505-24.969 2.139-7.227.865-13.979-3.001-20.343-1.161-1.915-2.589-3.772-3.249-5.86-.747-2.375-1.367-5.079-.971-7.46.672-4.038 3.77-6.044 7.962-6.428-22.94-21.29-58.986-13.667-72.27 9.466 5.112-.236 9.995-.545 14.88-.614.924-.012 2.454.768 2.672 1.494z' }),
        _react2.default.createElement('path', { d: 'M50.696 109.04c-.106.314-.112.659-.194 1.177 9.886 2.741 19.578 2.544 29.504-.802-5.067-13.873-10.02-27.44-15.159-41.516-4.855 14.1-9.508 27.622-14.151 41.141zM43.058 107.165l-22.84-62.653c-10.301 20.129-2.463 50.834 22.84 62.653zM112.102 66.907c.724-9.517-2.556-22.691-5.394-24.506-.314 3.5-.094 7.396-1.098 10.944-2.363 8.361-5.258 16.578-8.041 24.815-3.028 8.954-6.174 17.869-9.266 26.799 14.536-8.615 22.528-21.332 23.799-38.052z' })
      )
    )
  );
}