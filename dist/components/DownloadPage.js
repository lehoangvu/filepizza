'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ChromeNotice = require('./ChromeNotice');

var _ChromeNotice2 = _interopRequireDefault(_ChromeNotice);

var _DownloadActions = require('../actions/DownloadActions');

var _DownloadActions2 = _interopRequireDefault(_DownloadActions);

var _DownloadButton = require('./DownloadButton');

var _DownloadButton2 = _interopRequireDefault(_DownloadButton);

var _DownloadStore = require('../stores/DownloadStore');

var _DownloadStore2 = _interopRequireDefault(_DownloadStore);

var _ErrorPage = require('./ErrorPage');

var _ErrorPage2 = _interopRequireDefault(_ErrorPage);

var _ProgressBar = require('./ProgressBar');

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Spinner = require('./Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DownloadPage = function (_React$Component) {
  _inherits(DownloadPage, _React$Component);

  function DownloadPage() {
    _classCallCheck(this, DownloadPage);

    var _this = _possibleConstructorReturn(this, (DownloadPage.__proto__ || Object.getPrototypeOf(DownloadPage)).call(this));

    _this.state = _DownloadStore2.default.getState();

    _this._onChange = function () {
      _this.setState(_DownloadStore2.default.getState());
    };

    _this.downloadFile = _this.downloadFile.bind(_this);
    return _this;
  }

  _createClass(DownloadPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _DownloadStore2.default.listen(this._onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _DownloadStore2.default.unlisten(this._onChange);
    }
  }, {
    key: 'downloadFile',
    value: function downloadFile() {
      _DownloadActions2.default.requestDownload();
    }
  }, {
    key: 'render',
    value: function render() {
      switch (this.state.status) {
        case 'ready':
          return _react2.default.createElement(
            'div',
            { className: 'page' },
            _react2.default.createElement(
              'h1',
              null,
              'EzFile'
            ),
            _react2.default.createElement(_Spinner2.default, { dir: 'down',
              name: this.state.fileName,
              size: this.state.fileSize }),
            _react2.default.createElement(_ChromeNotice2.default, null),
            _react2.default.createElement(
              'p',
              { className: 'notice' },
              'M\u1EA1ng: ',
              this.state.peers,
              ' \xB7 Up: ',
              (0, _util.formatSize)(this.state.speedUp),
              ' \xB7 Down: ',
              (0, _util.formatSize)(this.state.speedDown)
            ),
            _react2.default.createElement(_DownloadButton2.default, { onClick: this.downloadFile })
          );

        case 'requesting':
        case 'downloading':
          return _react2.default.createElement(
            'div',
            { className: 'page' },
            _react2.default.createElement(
              'h1',
              null,
              'EzFile'
            ),
            _react2.default.createElement(_Spinner2.default, { dir: 'down', animated: true,
              name: this.state.fileName,
              size: this.state.fileSize }),
            _react2.default.createElement(_ChromeNotice2.default, null),
            _react2.default.createElement(
              'p',
              { className: 'notice' },
              'M\u1EA1ng: ',
              this.state.peers,
              ' \xB7 Up: ',
              (0, _util.formatSize)(this.state.speedUp),
              ' \xB7 Down: ',
              (0, _util.formatSize)(this.state.speedDown)
            ),
            _react2.default.createElement(_ProgressBar2.default, { value: this.state.progress })
          );

        case 'done':
          return _react2.default.createElement(
            'div',
            { className: 'page' },
            _react2.default.createElement(
              'h1',
              null,
              'EzFile'
            ),
            _react2.default.createElement(_Spinner2.default, { dir: 'down',
              name: this.state.fileName,
              size: this.state.fileSize }),
            _react2.default.createElement(_ChromeNotice2.default, null),
            _react2.default.createElement(
              'p',
              { className: 'notice' },
              'M\u1EA1ng: ',
              this.state.peers,
              ' \xB7 Up: ',
              (0, _util.formatSize)(this.state.speedUp),
              ' \xB7 Down: ',
              (0, _util.formatSize)(this.state.speedDown)
            ),
            _react2.default.createElement(_ProgressBar2.default, { value: 1 })
          );

        default:
          return _react2.default.createElement(_ErrorPage2.default, null);
      }
    }
  }]);

  return DownloadPage;
}(_react2.default.Component);

exports.default = DownloadPage;
module.exports = exports['default'];