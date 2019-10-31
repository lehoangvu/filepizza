'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactQr = require('react-qr');

var _reactQr2 = _interopRequireDefault(_reactQr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tempalink = function (_React$Component) {
  _inherits(Tempalink, _React$Component);

  function Tempalink() {
    _classCallCheck(this, Tempalink);

    var _this = _possibleConstructorReturn(this, (Tempalink.__proto__ || Object.getPrototypeOf(Tempalink)).call(this));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(Tempalink, [{
    key: 'onClick',
    value: function onClick(e) {
      e.target.setSelectionRange(0, 9999);
    }
  }, {
    key: 'render',
    value: function render() {
      var url = window.location.origin + '/' + this.props.token;
      var shortUrl = window.location.origin + '/download/' + this.props.shortToken;

      return _react2.default.createElement(
        'div',
        { className: 'tempalink' },
        _react2.default.createElement(
          'div',
          { className: 'qr' },
          _react2.default.createElement(_reactQr2.default, { text: url })
        ),
        _react2.default.createElement(
          'div',
          { className: 'urls' },
          _react2.default.createElement(
            'div',
            { className: 'long-url' },
            _react2.default.createElement('input', {
              onClick: this.onClick,
              readOnly: true,
              type: 'text',
              value: url })
          ),
          _react2.default.createElement(
            'div',
            { className: 'short-url' },
            'or, for short: ',
            _react2.default.createElement(
              'span',
              null,
              shortUrl
            )
          )
        )
      );
    }
  }]);

  return Tempalink;
}(_react2.default.Component);

exports.default = Tempalink;
module.exports = exports['default'];