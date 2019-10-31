'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Arrow = require('@app/components/Arrow');

var _Arrow2 = _interopRequireDefault(_Arrow);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _UploadActions = require('@app/actions/UploadActions');

var _UploadActions2 = _interopRequireDefault(_UploadActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UploadPage = function (_React$Component) {
  _inherits(UploadPage, _React$Component);

  function UploadPage() {
    _classCallCheck(this, UploadPage);

    var _this = _possibleConstructorReturn(this, (UploadPage.__proto__ || Object.getPrototypeOf(UploadPage)).call(this));

    _this.uploadFile = _this.uploadFile.bind(_this);
    return _this;
  }

  _createClass(UploadPage, [{
    key: 'uploadFile',
    value: function uploadFile(file) {
      _UploadActions2.default.uploadFile(file);
    }
  }, {
    key: 'render',
    value: function render() {
      switch (this.props.status) {
        case 'ready':
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(DropZone, { onDrop: this.uploadFile }),
            _react2.default.createElement(_Arrow2.default, { dir: 'up' })
          );
          break;

        case 'processing':
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Arrow2.default, { dir: 'up', animated: true }),
            _react2.default.createElement(FileDescription, { file: this.props.file })
          );
          break;

        case 'uploading':
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Arrow2.default, { dir: 'up', animated: true }),
            _react2.default.createElement(FileDescription, { file: this.props.file }),
            _react2.default.createElement(Temaplink, { token: this.props.token })
          );
          break;
      }
    }
  }]);

  return UploadPage;
}(_react2.default.Component);

exports.default = UploadPage;
module.exports = exports['default'];