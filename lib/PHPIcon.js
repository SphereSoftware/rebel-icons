'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = PHPIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PHPIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M64 33.293C30.535 33.293 3.406 47.041 3.406 64S30.535 94.707 64 94.707 124.594 80.959 124.594 64 97.465 33.293 64 33.293zm-15.767 36.69c-1.446 1.353-3.053 1.444-4.821 2.022-1.768.575-4.017-.005-6.755-.005h-6.203l-1.717 11h-7.242l6.46-33h13.927c4.186 0 7.245.765 9.165 2.966 1.92 2.196 2.496 5.099 1.733 9.042a14.328 14.328 0 0 1-1.602 4.366c-.749 1.345-1.732 2.495-2.945 3.609zM69.37 72l2.857-13.84c.324-1.671.206-3.229-.358-3.836-.565-.608-1.767-1.324-3.605-1.324h-5.742L58.82 72h-7.183l6.46-33h7.186l-1.72 11h6.401c4.028 0 6.806.369 8.332 1.772 1.529 1.409 1.987 2.647 1.377 5.794L76.668 72H69.37zm39.928-10.159a14.853 14.853 0 0 1-1.599 4.452 14.865 14.865 0 0 1-2.946 3.69c-1.446 1.353-3.054 1.444-4.821 2.022-1.768.575-4.02-.005-6.757-.005h-6.2l-1.72 11h-7.239l6.46-33h13.927c4.187 0 7.245.765 9.163 2.966 1.922 2.197 2.498 4.933 1.732 8.875z' }),
        _react2.default.createElement('path', { d: 'M95.657 53h-4.96l-2.705 14h4.406c2.919 0 5.094.198 6.521-.905 1.43-1.098 2.395-2.561 2.895-5.134.479-2.47.263-4.82-.653-5.835-.918-1.016-2.75-2.126-5.504-2.126zM39.14 53h-4.963l-2.703 14h4.403c2.919 0 5.094.198 6.524-.905 1.427-1.098 2.392-2.561 2.893-5.134.479-2.47.262-4.82-.654-5.835C43.725 54.11 41.891 53 39.14 53z' })
      )
    )
  );
}