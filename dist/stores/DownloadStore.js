'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DownloadActions = require('../actions/DownloadActions');

var _DownloadActions2 = _interopRequireDefault(_DownloadActions);

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _filepizzaSocket = require('filepizza-socket');

var _filepizzaSocket2 = _interopRequireDefault(_filepizzaSocket);

var _wt = require('../wt');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SPEED_REFRESH_TIME = 2000;

function downloadBlobURL(name, blobURL) {
  var a = document.createElement('a');
  document.body.appendChild(a);
  a.download = name;
  a.href = blobURL;
  a.click();
}

exports.default = _alt2.default.createStore(function () {
  function DownloadStore() {
    _classCallCheck(this, DownloadStore);

    this.bindActions(_DownloadActions2.default);

    this.fileName = '';
    this.fileSize = 0;
    this.fileType = '';
    this.infoHash = null;
    this.peers = 0;
    this.progress = 0;
    this.speedDown = 0;
    this.speedUp = 0;
    this.status = 'uninitialized';
    this.token = null;
  }

  _createClass(DownloadStore, [{
    key: 'onRequestDownload',
    value: function onRequestDownload() {
      var _this = this;

      if (this.status !== 'ready') return;
      this.status = 'requesting';

      (0, _wt.getClient)().then(function (client) {
        client.add(_this.infoHash, function (torrent) {
          _this.setState({ status: 'downloading' });

          var updateSpeed = function updateSpeed() {
            _this.setState({
              speedUp: torrent.uploadSpeed,
              speedDown: torrent.downloadSpeed,
              peers: torrent.numPeers
            });
          };

          torrent.on('upload', updateSpeed);
          torrent.on('download', updateSpeed);
          setInterval(updateSpeed, SPEED_REFRESH_TIME);

          var file = torrent.files[0];
          var stream = file.createReadStream();
          stream.on('data', function (chunk) {
            if (_this.status !== 'downloading') return;

            if (torrent.progress === 1) {
              _this.setState({ status: 'done', progress: 1 });
              file.getBlobURL(function (err, blobURL) {
                if (err) throw err;
                downloadBlobURL(_this.fileName, blobURL);
              });
            } else {
              _this.setState({ progress: torrent.progress });
            }
          });
        });
      });
    }
  }]);

  return DownloadStore;
}(), 'DownloadStore');
module.exports = exports['default'];