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
      _react2.default.createElement('path', { d: 'M93.326 99.354c-2.185 1.037-6.364 1.946-9.479 2.028-9.405.25-11.229-6.605-11.307-11.585V53.222h23.593v-17.79H72.622V5.5H55.41c-.278 0-.774.25-.844.881-1.004 9.16-5.294 25.236-23.117 31.662v15.179h11.889v38.391c0 13.143 9.7 31.817 35.292 31.379 8.639-.147 18.229-3.766 20.348-6.881l-5.652-16.757z' })
    )
  );
};