"use strict";

require("babel-polyfill");

require("./index.styl");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _routes = require("./routes");

var _routes2 = _interopRequireDefault(_routes);

var _alt = require("./alt");

var _alt2 = _interopRequireDefault(_alt);

var _webrtcsupport = require("webrtcsupport");

var _webrtcsupport2 = _interopRequireDefault(_webrtcsupport);

var _SupportActions = require("./actions/SupportActions");

var _SupportActions2 = _interopRequireDefault(_SupportActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bootstrap = document.getElementById("bootstrap").innerHTML;
_alt2.default.bootstrap(bootstrap);

window.FilePizza = function () {
  _reactRouter2.default.run(_routes2.default, _reactRouter2.default.HistoryLocation, function (Handler) {
    _react2.default.render(_react2.default.createElement(Handler, { data: bootstrap }), document);
  });

  if (!_webrtcsupport2.default.support) _SupportActions2.default.noSupport();

  var isChrome = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
  if (isChrome) _SupportActions2.default.isChrome();
};