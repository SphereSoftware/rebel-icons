'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rebelLib = require('./rebel-lib');

var _rebelLib2 = _interopRequireDefault(_rebelLib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Icons = {};

for (var key in _rebelLib2.default) {
  try {
    Icons[key] = require('./rebel-lib/' + (_rebelLib2.default[key] + 'Icon')).default;
  } catch (e) {}
}

var Icon = function Icon(_ref) {
  var icon = _ref.icon,
      style = _ref.style,
      color = _ref.color,
      size = _ref.size,
      svgStyle = _ref.svgStyle,
      svgProps = _ref.svgProps,
      rest = _objectWithoutProperties(_ref, ['icon', 'style', 'color', 'size', 'svgStyle', 'svgProps']);

  if (typeof Icons[icon] !== 'function') {
    console.error('Rebel Icons: requested unknown icon \'' + icon + '\'');
    return _react2.default.createElement('div', null);
  }
  var props = _extends({}, svgProps, { color: color, size: size, style: svgStyle });
  return _react2.default.createElement(
    'div',
    _extends({ style: _extends({}, style, { display: 'inline-block', lineHeight: 0 }) }, rest),
    _react2.default.createElement(Icons[icon], props)
  );
};

Icon.propTypes = {
  icon: _react.PropTypes.string.isRequired,
  style: _react.PropTypes.object,
  color: _react.PropTypes.string,
  size: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  svgStyle: _react.PropTypes.object,
  svgProps: _react.PropTypes.object
};

exports.default = Icon;