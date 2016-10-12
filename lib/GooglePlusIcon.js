'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = GooglePlusIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GooglePlusIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'g',
        { fillRule: 'evenodd', clipRule: 'evenodd' },
        _react2.default.createElement('path', { d: 'M41.864 58.841v12.981h21.473c-.864 5.573-6.49 16.336-21.473 16.336-12.926 0-23.475-10.71-23.475-23.908s10.549-23.908 23.475-23.908c7.358 0 12.279 3.138 15.091 5.842l10.277-9.899c-6.601-6.167-15.147-9.899-25.369-9.899C20.93 26.386 4 43.316 4 64.25s16.93 37.863 37.864 37.863c21.853 0 36.347-15.36 36.347-36.997 0-2.488-.27-4.382-.592-6.275H41.864zM123 58.841h-10.818V48.023h-10.819v10.818H90.546v10.818h10.817v10.819h10.819V69.659H123z' })
      )
    )
  );
}