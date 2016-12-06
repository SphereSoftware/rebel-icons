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
      _react2.default.createElement('path', { d: 'M12.164 5.25l9.568 107.266 42.934 11.895 43.056-11.897L117.299 5.25H12.164zm84.367 36.757H46.17l1.201 10.025H95.334l-.319 4.379-3.322 37.518-27.609 7.612-26.33-6.461-1.831-19.657H49.136l.937 9.956 13.968 3.329 15.825-3.757 1.083-16.212H35.336L31.785 28.64h65.93l-1.184 13.367z' })
    )
  );
};