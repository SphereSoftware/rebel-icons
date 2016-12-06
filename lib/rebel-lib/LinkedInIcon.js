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
      _react2.default.createElement('path', { d: 'M114.556 6H14.417C9.633 6 5.75 9.791 5.75 14.473v100.549c0 4.678 3.883 8.478 8.667 8.478h100.138c4.793 0 8.694-3.8 8.694-8.478V14.473c.001-4.682-3.9-8.473-8.693-8.473zm-72.652 99.423H23.827V51.192h18.077v54.231zm-9.034-61.46a10.843 10.843 0 0 1-10.852-10.848c0-5.984 4.846-10.848 10.852-10.848 5.985 0 10.843 4.864 10.843 10.848 0 5.989-4.859 10.848-10.843 10.848zm72.303 61.46H87.097V78.308c0-7.344-1.979-14.321-9.039-14.321-7.062 0-9.038 7.088-9.038 14.401v27.035H50.942V51.192H69.02v6.523h.904c2.321-4.409 8.134-8.156 15.045-8.156 16.673 0 20.204 10.954 20.204 24.23v31.634z' })
    )
  );
};