'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = DrupalIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DrupalIcon(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    _extends({ viewBox: '0 0 128 128' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M89.769 27.272c-5.946-3.703-11.555-5.16-17.163-8.863-3.479-2.357-8.304-7.965-12.342-12.79-.787 7.741-3.141 10.882-5.836 13.125-5.719 4.49-9.312 5.836-14.25 8.528-4.148 2.133-26.699 15.596-26.699 44.542s24.345 50.257 51.382 50.257 50.485-19.631 50.485-49.363c0-29.729-21.985-43.192-25.577-45.436zm.648 84.241c-.563.563-5.722 4.152-11.779 4.715-6.06.559-14.246.897-19.188-3.593-.783-.783-.559-1.905 0-2.354.566-.449 1.015-.784 1.684-.784.677 0 .566 0 .897.222 2.243 1.794 5.612 3.254 12.791 3.254s12.228-2.019 14.475-3.703c1.011-.783 1.456-.11 1.57.339.112.448.333 1.12-.45 1.904zm-19.634-10.205c1.235-1.125 3.254-2.92 5.159-3.703 1.909-.787 2.92-.673 4.715-.673 1.791 0 3.703.11 5.049 1.011 1.343.895 2.133 2.917 2.578 4.035.445 1.121 0 1.798-.897 2.243-.783.452-.897.225-1.681-1.232-.787-1.46-1.46-2.916-5.388-2.916-3.927 0-5.159 1.346-7.064 2.916-1.912 1.57-2.581 2.133-3.258 1.232-.67-.894-.448-1.791.787-2.913zm29.733.897c-4.042-.338-12.117-12.904-17.28-13.129-6.502-.224-20.642 13.574-31.751 13.574-6.73 0-8.746-1.008-10.992-2.468-3.365-2.357-5.049-5.946-4.939-10.882.114-8.749 8.304-16.941 18.626-17.056 13.125-.107 22.212 13.015 28.835 12.904 5.604-.11 16.379-11.106 21.649-11.106 5.607 0 7.182 5.836 7.182 9.312 0 3.479-1.125 9.764-3.817 13.688-2.692 3.928-4.377 5.388-7.513 5.163z' })
    )
  );
}