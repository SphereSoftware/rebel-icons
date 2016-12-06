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
      _react2.default.createElement('path', { d: 'M120.177 58.804L69.235 7.865a7.52 7.52 0 0 0-10.63 0l-10.571 10.58 13.415 13.418c3.121-1.051 6.694-.345 9.18 2.138 2.502 2.501 3.198 6.107 2.12 9.237l12.93 12.933c3.133-1.081 6.739-.384 9.237 2.12 3.493 3.49 3.493 9.154 0 12.641-3.49 3.496-9.15 3.496-12.644 0-2.626-2.627-2.329-6.486-1.001-9.72L70.165 49.149V80.89c0 .416.702.982 1.417 1.685 3.484 3.496 3.017 9.151-.477 12.65-3.49 3.489-9.395 3.489-12.882 0-3.493-3.499-5.083-9.154-1.593-12.65.864-.857 1.337-1.51 1.337-1.947V48.596c0-.438-.59-1.084-1.457-1.95-2.641-2.645-2.543-6.524-1.191-9.773l-12.855-13.23L7.72 58.568c-2.934 2.936-2.844 7.694.092 10.628l50.989 50.938c2.93 2.933 7.709 2.933 10.646 0l50.718-50.7c2.934-2.936 2.945-7.697.012-10.63z' })
    )
  );
};