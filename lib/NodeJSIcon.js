'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = NodeJSIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NodeJSIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M111.979 31.384L69.295 6.577c-2.693-1.531-6.18-1.531-8.897 0L17.483 31.384C14.704 32.985 13 35.988 13 39.206V88.75c0 3.216 1.768 6.222 4.547 7.832l11.28 6.479c5.451 2.685 7.19 2.685 9.675 2.685 8.074 0 12.498-4.881 12.498-13.396V43.437c0-.691-.117-1.437-.795-1.437h-5.448C44.07 42 41 42.746 41 43.437v48.912c0 3.776-2.649 7.531-9.029 4.341 0 0-9.971-7.467-9.971-7.939V39.206c0-.469 42.67-25.939 42.67-25.939.401-.224.775-.224 1.174 0 0 0 41.156 25.458 41.156 25.939V88.75c0 .473-41.885 25.94-41.885 25.94-.364.218-.646.218-1.045 0l-10.868-6.541c-.328-.189-.678-.257-.994-.082-3.049 1.727-3.587 1.956-6.443 2.947-.703.246-1.735.672.4 1.868l14.347 8.481a8.998 8.998 0 0 0 4.503 1.209 8.984 8.984 0 0 0 4.521-1.209l42.441-24.782c2.782-1.62 4.021-4.616 4.021-7.832V39.206c.002-3.218-1.238-6.215-4.019-7.822z' }),
        _react2.default.createElement('path', { d: 'M78.283 80.897c-11.363 0-13.863-1.521-14.697-7.175-.098-.607-8.025-.496-8.025.182 0 7.236 3.933 15.193 22.722 15.193 13.598 0 21.399-5.689 21.399-15.04 0-9.275-6.269-11.903-19.458-13.652-13.332-1.762-14.685-2.752-14.685-5.881 0-2.574 1.147-6.058 11.019-6.058 8.819 0 12.07.264 13.408 6.208.117.559 8.043.762 8.013.406-.865-10.239-7.666-14.609-21.421-14.609-12.237 0-19.538 5.371-19.538 14.03 0 9.396 7.264 12.095 19.007 13.258 14.056 1.377 15.147 3.481 15.147 6.245.002 4.799-3.854 6.893-12.891 6.893z' })
      )
    )
  );
}