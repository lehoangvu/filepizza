'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _DownloadPage = require('./components/DownloadPage');

var _DownloadPage2 = _interopRequireDefault(_DownloadPage);

var _UploadPage = require('./components/UploadPage');

var _UploadPage2 = _interopRequireDefault(_UploadPage);

var _ErrorPage = require('./components/ErrorPage');

var _ErrorPage2 = _interopRequireDefault(_ErrorPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { handler: _App2.default },
  _react2.default.createElement(_reactRouter.DefaultRoute, { handler: _UploadPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { name: 'download', path: '/:a/:b/:c/:d', handler: _DownloadPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { name: 'download-short', path: '/download/:a', handler: _DownloadPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { name: 'error', path: 'error', handler: _ErrorPage2.default }),
  _react2.default.createElement(_reactRouter.NotFoundRoute, { handler: _ErrorPage2.default })
);
module.exports = exports['default'];