'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DropZone = require('./DropZone');

var _DropZone2 = _interopRequireDefault(_DropZone);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Spinner = require('./Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Tempalink = require('./Tempalink');

var _Tempalink2 = _interopRequireDefault(_Tempalink);

var _UploadActions = require('../actions/UploadActions');

var _UploadActions2 = _interopRequireDefault(_UploadActions);

var _UploadStore = require('../stores/UploadStore');

var _UploadStore2 = _interopRequireDefault(_UploadStore);

var _filepizzaSocket = require('filepizza-socket');

var _filepizzaSocket2 = _interopRequireDefault(_filepizzaSocket);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UploadPage = function (_React$Component) {
  _inherits(UploadPage, _React$Component);

  function UploadPage() {
    _classCallCheck(this, UploadPage);

    var _this = _possibleConstructorReturn(this, (UploadPage.__proto__ || Object.getPrototypeOf(UploadPage)).call(this));

    _this.state = _UploadStore2.default.getState();

    _this._onChange = function () {
      _this.setState(_UploadStore2.default.getState());
    };

    _this.uploadFile = _this.uploadFile.bind(_this);
    return _this;
  }

  _createClass(UploadPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _UploadStore2.default.listen(this._onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _UploadStore2.default.unlisten(this._onChange);
    }
  }, {
    key: 'uploadFile',
    value: function uploadFile(file) {
      _UploadActions2.default.uploadFile(file);
    }
  }, {
    key: 'handleSelectedFile',
    value: function handleSelectedFile(event) {
      var files = event.target.files;
      if (files.length > 0) {
        if (typeof ga != 'undefined') {
          ga('gtm1.send', 'event', 'Upload', 'select file', files[0].name);
        }
        _UploadActions2.default.uploadFile(files[0]);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      switch (this.state.status) {
        case 'ready':

          return _react2.default.createElement(
            _DropZone2.default,
            { onDrop: this.uploadFile },
            _react2.default.createElement(
              'div',
              { className: 'page' },
              _react2.default.createElement(
                'div',
                { onClick: function onClick() {
                    document.querySelectorAll('input[type=file]')[0].click();
                  } },
                _react2.default.createElement(_Spinner2.default, { dir: 'up' })
              ),
              _react2.default.createElement(
                'h1',
                null,
                'EzFile'
              ),
              _react2.default.createElement(
                'h2',
                null,
                'G\u1EEDi v\xE0 nh\u1EADn file mi\u1EC5n ph\xED'
              ),
              _react2.default.createElement(
                'p',
                { className: 'notice' },
                'File c\u1EE7a b\u1EA1n \u0111\u01B0\u1EE3c g\u1EEDi tr\u1EF1c ti\u1EBFp \u0111\u1EBFn ng\u01B0\u1EDDi nh\u1EADn, ch\xFAng t\xF4i kh\xF4ng l\u01B0u tr\u1EEF b\u1EA5t c\u1EE9 th\xF4ng tin n\xE0o.'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'label',
                  { className: 'select-file-label' },
                  _react2.default.createElement('input', { type: 'file', onChange: this.handleSelectedFile, required: true }),
                  _react2.default.createElement(
                    'span',
                    null,
                    'Ch\u1ECDn file'
                  )
                )
              )
            )
          );

        case 'processing':
          return _react2.default.createElement(
            'div',
            { className: 'page' },
            _react2.default.createElement(_Spinner2.default, { dir: 'up', animated: true }),
            _react2.default.createElement(
              'h1',
              null,
              'EzFile'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Processing...'
            )
          );

        case 'uploading':
          return _react2.default.createElement(
            'div',
            { className: 'page' },
            _react2.default.createElement(
              'h1',
              null,
              'EzFile'
            ),
            _react2.default.createElement(_Spinner2.default, { dir: 'up', animated: true,
              name: this.state.fileName,
              size: this.state.fileSize }),
            _react2.default.createElement(
              'h2',
              null,
              'G\u1EEDi v\xE0 nh\u1EADn file mi\u1EC5n ph\xED'
            ),
            _react2.default.createElement(
              'small',
              { className: 'notice' },
              'H\xC3Y GI\u1EEE TRANG N\xC0Y LU\xD4N M\u1EDE \u0110\u1EC2 B\u1EA0N B\xC8 C\u1EE6A B\u1EA0N C\xD3 TH\u1EC2 T\u1EA2I FILE!'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Peers: ',
              this.state.peers,
              ' \xB7 Up: ',
              (0, _util.formatSize)(this.state.speedUp)
            ),
            _react2.default.createElement(_Tempalink2.default, { token: this.state.token, shortToken: this.state.shortToken })
          );
      }
    }
  }]);

  return UploadPage;
}(_react2.default.Component);

exports.default = UploadPage;
module.exports = exports['default'];