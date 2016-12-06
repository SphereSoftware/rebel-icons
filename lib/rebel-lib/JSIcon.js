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
      _react2.default.createElement('path', { d: 'M5.5 5.5v117h117V5.5H5.5zm61.886 99.695c-1.724 3.511-5.02 5.816-8.842 6.928-5.869 1.347-11.485.578-15.66-1.929-2.798-1.714-4.979-4.355-6.458-7.396 2.971-1.813 5.935-3.642 8.905-5.456.08.034.315.457.626 1.004 1.139 1.907 2.116 3.251 4.044 4.2 1.894.644 6.049 1.056 7.652-2.275.98-1.693.668-7.223.668-13.247 0-9.47.045-17.706.045-28.343h10.958c0 10.637.052 20.13 0 30.182.026 6.159.559 11.734-1.938 16.332zm45.468-3.095c-3.815 13.032-25.05 13.451-33.536 4.844-1.793-2.025-2.919-3.085-3.988-5.422 4.508-2.597 4.508-2.597 8.898-5.135 2.385 3.663 4.587 5.679 8.555 6.506 5.377.654 10.793-1.194 9.577-6.907-1.246-4.671-11.014-5.803-17.665-10.796-6.748-4.528-8.334-15.546-2.78-21.84 1.846-2.327 5-4.065 8.307-4.896l3.452-.45c6.627-.132 10.771 1.617 13.811 5.013.849.859 1.538 1.783 2.829 3.788-3.531 2.25-3.518 2.227-8.573 5.498-1.083-2.327-2.877-3.784-4.771-4.418-2.939-.894-6.647.076-7.417 3.186-.267.955-.207 1.849.212 3.431 1.194 2.719 5.193 3.899 8.776 5.544 10.325 4.186 13.812 8.68 14.671 14.025.822 4.601-.202 7.582-.358 8.029z' })
    )
  );
};