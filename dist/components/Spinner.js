'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spinner = function (_React$Component) {
  _inherits(Spinner, _React$Component);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).apply(this, arguments));
  }

  _createClass(Spinner, [{
    key: 'render',
    value: function render() {
      var classes = (0, _classnames2.default)('spinner', {
        'spinner-animated': this.props.animated
      });

      return _react2.default.createElement(
        'div',
        { className: classes },
        _react2.default.createElement('img', {
          alt: this.props.name || this.props.dir,
          src: '/images/' + this.props.dir + '.png',
          className: 'spinner-image' }),
        this.props.name === null ? null : _react2.default.createElement(
          'div',
          { className: 'spinner-name' },
          this.props.name
        ),
        this.props.size === null ? null : _react2.default.createElement(
          'div',
          { className: 'spinner-size' },
          (0, _util.formatSize)(this.props.size)
        )
      );
    }
  }]);

  return Spinner;
}(_react2.default.Component);

exports.default = Spinner;


Spinner.propTypes = {
  dir: _react2.default.PropTypes.oneOf(['up', 'down']).isRequired,
  name: _react2.default.PropTypes.string,
  size: _react2.default.PropTypes.number,
  animated: _react2.default.PropTypes.bool
};

Spinner.defaultProps = {
  name: null,
  size: null,
  animated: false
};
module.exports = exports['default'];