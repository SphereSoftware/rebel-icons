'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = GraphTreeIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GraphTreeIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M35.193 90.388H7.708a4.024 4.024 0 0 0-4.026 4.026v14.651a4.023 4.023 0 0 0 4.026 4.026h27.485a4.026 4.026 0 0 0 4.026-4.026V94.414a4.025 4.025 0 0 0-4.026-4.026zM27.49 72.27h32.452v11.175h12.079V72.27h28.925v11.175h12.079V66.229a6.039 6.039 0 0 0-6.039-6.04H21.451a6.037 6.037 0 0 0-6.04 6.04v17.215H27.49V72.27zm20.553-30.466h11.898v11.438H72.02V41.804h11.907a4.027 4.027 0 0 0 4.026-4.027V19.088a4.028 4.028 0 0 0-4.026-4.026H48.043a4.026 4.026 0 0 0-4.027 4.026v18.689a4.026 4.026 0 0 0 4.027 4.027zm31.681 48.584H52.243a4.024 4.024 0 0 0-4.026 4.026v14.651a4.023 4.023 0 0 0 4.026 4.026h27.481a4.026 4.026 0 0 0 4.026-4.026V94.414a4.027 4.027 0 0 0-4.026-4.026zm41 0H93.246a4.024 4.024 0 0 0-4.026 4.026v14.651a4.023 4.023 0 0 0 4.026 4.026h27.478a4.023 4.023 0 0 0 4.026-4.026V94.414a4.024 4.024 0 0 0-4.026-4.026z' })
    )
  );
}