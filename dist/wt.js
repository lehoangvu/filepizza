'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClient = getClient;

var _filepizzaSocket = require('filepizza-socket');

var _filepizzaSocket2 = _interopRequireDefault(_filepizzaSocket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getClient() {
  return new Promise(function (resolve, reject) {
    _filepizzaSocket2.default.emit('rtcConfig', {}, function (rtcConfig) {
      var client = new WebTorrent({
        tracker: { rtcConfig: rtcConfig }
      });
      resolve(client);
    });
  });
}