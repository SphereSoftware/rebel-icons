'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = RebelIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RebelIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M54.91 123.639L16.835 101.66a17.946 17.946 0 0 1-8.974-15.545V42.152a17.939 17.939 0 0 1 8.974-15.543L54.91 4.627a17.931 17.931 0 0 1 17.944 0l38.072 21.981a17.941 17.941 0 0 1 8.974 15.543v43.962c0 6.412-3.419 12.34-8.974 15.545l-38.072 21.979a17.927 17.927 0 0 1-17.944.002z', opacity: '.2' }),
        _react2.default.createElement('path', { d: 'M97.697 98.605H76.354a.232.232 0 0 1-.18-.082l-41.86-51.279H56.24L97.871 98.24a.223.223 0 0 1-.174.365z', opacity: '.36' }),
        _react2.default.createElement('path', { d: 'M100.427 54.65c-.047 13.357-10.979 24.124-24.333 24.124H52.926v18.877a.226.226 0 0 1-.22.227H34.538a.227.227 0 0 1-.223-.227V62.119c0-.123.102-.225.223-.225h41.946c4.036-.077 7.271-3.391 7.195-7.455-.053-4.039-3.391-7.247-7.43-7.194H34.315l8.2-16.852H76.25c13.387 0 24.223 10.865 24.177 24.257z' })
      )
    )
  );
}