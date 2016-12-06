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
        _react2.default.createElement('path', { d: 'M83.171 32.177L64.75 13.755 46.329 32.177l-4.532-4.539L64.75 4.685l22.953 22.953z' }),
        _react2.default.createElement('path', { d: 'M61.302 9.22h6.896v72.405h-6.896z' }),
        _react2.default.createElement('path', { d: 'M99.229 123H30.271c-5.704 0-10.343-4.64-10.343-10.344V50.595c0-5.704 4.64-10.344 10.343-10.344h24.135v6.896H30.271a3.453 3.453 0 0 0-3.448 3.448v62.062a3.45 3.45 0 0 0 3.448 3.448h68.958a3.45 3.45 0 0 0 3.448-3.448V50.595a3.453 3.453 0 0 0-3.448-3.448H75.094v-6.896h24.135c5.704 0 10.344 4.64 10.344 10.344v62.062c-.001 5.703-4.64 10.343-10.344 10.343z' })
      )
    )
  );
};