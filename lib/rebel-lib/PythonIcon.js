'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('../IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M49.4 57h28.557C85.907 57 92 55.276 92 47.293V20.067c0-7.748-6.413-13.57-14.171-14.862-4.91-.816-9.944-1.189-14.834-1.167-4.883.023-8.571.439-12.675 1.167C38.217 7.343 37 11.817 37 20.067V27h28v3H24.375c-8.31 0-15.585 7.293-17.862 16.796-2.624 10.891-2.743 16.512 0 27.885C8.545 83.143 13.398 88 21.708 88H31v-8.419C31 70.145 39.703 57 49.4 57zm-1.8-33.301c-2.964 0-5.363-2.429-5.363-5.429 0-3.017 2.399-5.468 5.363-5.468 2.954 0 5.366 2.452 5.366 5.468-.001 3-2.413 5.429-5.366 5.429z' }),
        _react2.default.createElement('path', { d: 'M120.845 46.796C118.789 38.522 114.867 30 106.548 30H98v17.293C98 57.136 87.474 61 77.957 61H49.4C41.576 61 37 72.113 37 79.951v27.226c0 7.744 5.789 12.305 13.342 14.524 9.054 2.663 17.136 3.143 27.966 0C85.504 119.616 92 115.424 92 107.177V95H65v-7h41.548c8.31 0 11.405-4.62 14.297-13.319 2.983-8.958 2.854-16.4 0-27.885zm-41.09 56.746c2.967 0 5.366 2.429 5.366 5.432 0 3.014-2.399 5.465-5.366 5.465-2.95 0-5.362-2.451-5.362-5.465 0-3.003 2.412-5.432 5.362-5.432z' })
      )
    )
  );
};