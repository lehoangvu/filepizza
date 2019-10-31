'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropZone = function (_React$Component) {
  _inherits(DropZone, _React$Component);

  function DropZone() {
    _classCallCheck(this, DropZone);

    var _this = _possibleConstructorReturn(this, (DropZone.__proto__ || Object.getPrototypeOf(DropZone)).call(this));

    _this.state = { focus: false };

    _this.onDragEnter = _this.onDragEnter.bind(_this);
    _this.onDragLeave = _this.onDragLeave.bind(_this);
    _this.onDragOver = _this.onDragOver.bind(_this);
    _this.onDrop = _this.onDrop.bind(_this);
    return _this;
  }

  _createClass(DropZone, [{
    key: 'onDragEnter',
    value: function onDragEnter() {
      this.setState({ focus: true });
    }
  }, {
    key: 'onDragLeave',
    value: function onDragLeave(e) {
      if (e.target !== this.refs.overlay.getDOMNode()) return;
      this.setState({ focus: false });
    }
  }, {
    key: 'onDragOver',
    value: function onDragOver(e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
    }
  }, {
    key: 'onDrop',
    value: function onDrop(e) {
      e.preventDefault();
      this.setState({ focus: false });

      var file = e.dataTransfer.files[0];
      if (this.props.onDrop && file) this.props.onDrop(file);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'drop-zone', ref: 'root',
          onDragEnter: this.onDragEnter,
          onDragLeave: this.onDragLeave,
          onDragOver: this.onDragOver,
          onDrop: this.onDrop },
        _react2.default.createElement('div', { className: 'drop-zone-overlay',
          hidden: !this.state.focus,
          ref: 'overlay' }),
        this.props.children
      );
    }
  }]);

  return DropZone;
}(_react2.default.Component);

exports.default = DropZone;


DropZone.propTypes = {
  onDrop: _react2.default.PropTypes.func.isRequired
};
module.exports = exports['default'];