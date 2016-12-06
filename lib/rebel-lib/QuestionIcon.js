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
      _react2.default.createElement('path', { d: 'M31.57 30.504c1.623-4.708 4.025-8.702 7.216-12.002 3.185-3.294 7.052-5.858 11.591-7.697 4.54-1.839 9.731-2.758 15.564-2.758 4.543 0 8.781.676 12.727 2.028 3.946 1.352 7.43 3.325 10.456 5.919s5.401 5.73 7.131 9.402 2.594 7.892 2.594 12.648c0 6.053-1.321 11.186-3.97 15.4s-6.029 8.27-10.133 12.161c-3.35 3.349-6.029 5.974-8.026 7.861-1.997 1.894-3.483 3.757-4.457 5.59-.975 1.839-1.62 4.086-1.949 6.729-.316 2.649-.536 4.306-.646 9.274H59.456c-.109-4.969.165-6.973.81-10.327.646-3.35 1.705-6.376 3.161-9.08 1.461-2.697 3.403-5.291 5.84-7.782 2.43-2.484 5.37-5.292 8.829-8.428 3.033-2.807 5.542-5.943 7.539-9.402 2.003-3.459 3.002-7.295 3.002-11.515 0-3.24-.621-6.211-1.863-8.915-1.242-2.697-2.917-4.999-5.023-6.887-2.107-1.894-4.567-3.379-7.381-4.463-2.813-1.078-5.785-1.62-8.915-1.62-4.323 0-8.163.761-11.512 2.271-3.349 1.517-6.108 3.593-8.267 6.242-2.165 2.649-3.785 5.755-4.865 9.323-1.081 3.568-1.568 6.485-1.458 10.699H29.137c0-5.732.813-9.97 2.433-14.671zm38.695 77.025V120H57.831v-12.471h12.434z' })
    )
  );
};