'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = PencilIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PencilIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M13.142 116.856l9.127-36.51 55.545-55.544L105.2 52.184l-55.549 55.548-36.509 9.124zm15.415-32.949l-5.845 23.379 23.379-5.841 49.261-49.261-17.538-17.535-49.257 49.258z' }),
        _react2.default.createElement('path', { d: 'M43.571 105.656a26.36 26.36 0 0 0-19.23-19.228l1.685-6.755a33.293 33.293 0 0 1 24.301 24.301l-6.756 1.682z' }),
        _react2.default.createElement('path', { d: 'M86.575 38.482l4.925 4.92-48.64 48.68-4.924-4.92zM17.927 112.075l10.86-2.72a11.202 11.202 0 0 0-8.145-8.145l-2.715 10.865zM107.759 49.622L80.38 22.24l10.907-10.906 1.704.227c13.221 1.762 23.687 12.227 25.448 25.448l.227 1.706-10.907 10.907zM90.228 22.24l17.531 17.535 3.498-3.495c-1.839-8.782-8.755-15.696-17.535-17.537l-3.494 3.497z' })
      )
    )
  );
}