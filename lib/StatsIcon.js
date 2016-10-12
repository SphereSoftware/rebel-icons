'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = StatsIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function StatsIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M122.063 109.673H5.944c-2.176 0-3.937 1.761-3.937 3.937s1.761 3.937 3.937 3.937h116.118c2.177 0 3.938-1.761 3.938-3.937s-1.761-3.937-3.937-3.937zM20.004 84.017c8.462 0 15.321-6.863 15.321-15.321a15.26 15.26 0 0 0-1.169-5.848l10.058-10.1c2.011.973 4.237 1.561 6.621 1.561 1.046 0 2.076-.107 3.064-.308L66.26 72.779a15.261 15.261 0 0 0-2.611 8.559c0 8.462 6.859 15.321 15.321 15.321 8.463 0 15.322-6.859 15.322-15.321 0-3.68-1.35-7.013-3.515-9.654l16.633-31.362c.457.042.896.139 1.364.139 8.463 0 15.325-6.859 15.325-15.321s-6.862-15.321-15.325-15.321c-8.458 0-15.321 6.859-15.321 15.321 0 3.679 1.354 7.013 3.519 9.654L80.34 66.154c-.457-.043-.899-.139-1.369-.139-.969 0-1.91.111-2.829.284L63.654 47.338a15.23 15.23 0 0 0 2.5-8.351c0-8.462-6.859-15.321-15.318-15.321-8.466 0-15.325 6.859-15.325 15.321 0 1.719.346 3.345.873 4.887l-10.6 10.646a15.212 15.212 0 0 0-5.779-1.149c-8.462 0-15.321 6.863-15.321 15.325-.001 8.457 6.858 15.321 15.32 15.321zm88.771-66.595c4.253 0 7.717 3.46 7.717 7.716s-3.464 7.712-7.717 7.712c-4.252 0-7.712-3.456-7.712-7.712s3.46-7.716 7.712-7.716zM78.971 73.447c4.349 0 7.89 3.541 7.89 7.89s-3.541 7.889-7.89 7.889c-4.348 0-7.889-3.54-7.889-7.889s3.541-7.89 7.889-7.89zm-28.136-42.28c4.31 0 7.82 3.507 7.82 7.82 0 4.314-3.51 7.82-7.82 7.82-4.314 0-7.824-3.506-7.824-7.82s3.51-7.82 7.824-7.82zM20.004 60.802c4.349 0 7.89 3.541 7.89 7.894s-3.541 7.89-7.89 7.89c-4.348 0-7.889-3.537-7.889-7.89s3.541-7.894 7.889-7.894z' })
    )
  );
}