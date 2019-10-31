"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UploadActions = require("../actions/UploadActions");

var _UploadActions2 = _interopRequireDefault(_UploadActions);

var _alt = require("../alt");

var _alt2 = _interopRequireDefault(_alt);

var _filepizzaSocket = require("filepizza-socket");

var _filepizzaSocket2 = _interopRequireDefault(_filepizzaSocket);

var _wt = require("../wt");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TRACKERS = [["wss://tracker.btorrent.xyz"], ["wss://tracker.openwebtorrent.com"], ["wss://tracker.fastcast.nz"]];

var SPEED_REFRESH_TIME = 2000;

exports.default = _alt2.default.createStore(function () {
  function UploadStore() {
    _classCallCheck(this, UploadStore);

    this.bindActions(_UploadActions2.default);

    this.fileName = "";
    this.fileSize = 0;
    this.fileType = "";
    this.infoHash = null;
    this.peers = 0;
    this.speedUp = 0;
    this.status = "ready";
    this.token = null;
    this.shortToken = null;
  }

  _createClass(UploadStore, [{
    key: "onUploadFile",
    value: function onUploadFile(file) {
      var _this = this;

      if (this.status !== "ready") return;
      this.status = "processing";

      (0, _wt.getClient)().then(function (client) {
        client.seed(file, { announce: TRACKERS }, function (torrent) {
          var updateSpeed = function updateSpeed() {
            _this.setState({
              speedUp: torrent.uploadSpeed,
              peers: torrent.numPeers
            });
          };

          torrent.on("upload", updateSpeed);
          torrent.on("download", updateSpeed);
          setInterval(updateSpeed, SPEED_REFRESH_TIME);

          _filepizzaSocket2.default.emit("upload", {
            fileName: file.name,
            fileSize: file.size,
            fileType: file.type,
            infoHash: torrent.magnetURI
          }, function (res) {
            _this.setState({
              status: "uploading",
              token: res.token,
              shortToken: res.shortToken,
              fileName: file.name,
              fileSize: file.size,
              fileType: file.type,
              infoHash: torrent.magnetURI
            });
          });
        });
      });
    }
  }]);

  return UploadStore;
}(), "UploadStore");
module.exports = exports["default"];