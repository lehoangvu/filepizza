'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DownloadStore = require('../stores/DownloadStore');

var _DownloadStore2 = _interopRequireDefault(_DownloadStore);

var _SupportStore = require('../stores/SupportStore');

var _SupportStore2 = _interopRequireDefault(_SupportStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getState() {
  return {
    active: _SupportStore2.default.getState().isChrome && _DownloadStore2.default.getState().fileSize >= 500000000
  };
}

var ChromeNotice = function (_React$Component) {
  _inherits(ChromeNotice, _React$Component);

  function ChromeNotice() {
    _classCallCheck(this, ChromeNotice);

    var _this = _possibleConstructorReturn(this, (ChromeNotice.__proto__ || Object.getPrototypeOf(ChromeNotice)).call(this));

    _this.state = getState();

    _this._onChange = function () {
      _this.setState(getState());
    };
    return _this;
  }

  _createClass(ChromeNotice, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _DownloadStore2.default.listen(this._onChange);
      _SupportStore2.default.listen(this._onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _DownloadStore2.default.unlisten(this._onChange);
      _SupportStore2.default.unlisten(this._onChange);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.active) {
        return _react2.default.createElement(
          'p',
          { className: 'notice' },
          'Chrome g\u1EB7p v\u1EA5n \u0111\u1EC1 khi dowload file > 500 MB. H\xE3y d\xF9ng Firefox thay th\u1EBF.'
        );
      } else {
        return null;
      }
    }
  }]);

  return ChromeNotice;
}(_react2.default.Component);

exports.default = ChromeNotice;
module.exports = exports['default'];