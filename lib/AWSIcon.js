'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = AWSIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AWSIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M38.055 77.296l-11.084 4.761 10.268 4.389 11.907-4.389-11.091-4.761zM21.39 83.251l-.374 21.43 16.223 7.143v-22.25L21.39 83.251zm33.337 0l-14.662 5.578v20.984l14.662-5.955V83.251zM72.212 16.579l-11.163 4.765 10.343 4.388 11.903-4.388-11.083-4.765zM56.73 22.905v21.427l13.842 4.022.446-19.498-14.288-5.951zm30.957 1.191L74.59 29.677v21.056l13.097-5.952V24.096zM19.787 46.74L8.702 51.499l10.271 4.394 11.904-4.394-11.09-4.759zM3.121 52.695l-.371 21.43 16.223 7.14V59.018L3.121 52.695zm33.334 0l-14.656 5.581v20.982l14.656-5.952V52.695zM55.504 45.947L44.42 50.712l10.265 4.391 11.904-4.391-11.085-4.765zm-16.665 5.955l-.374 21.424 16.22 7.148v-22.25l-15.846-6.322zm33.331 0L57.514 57.48v20.981L72.17 72.51V51.902zM107.092 16.579l-11.084 4.765 10.268 4.388 11.907-4.388-11.091-4.765zm-16.665 5.955l-.371 21.427 16.22 7.146v-22.25l-15.849-6.323zm33.334 0l-14.658 5.581V49.1l14.658-5.955V22.534z' })
      )
    )
  );
}