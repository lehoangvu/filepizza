'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function formatProgress(dec) {
  return (dec * 100).toPrecision(3) + "%";
}

var ProgressBar = function (_React$Component) {
  _inherits(ProgressBar, _React$Component);

  function ProgressBar() {
    _classCallCheck(this, ProgressBar);

    return _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).apply(this, arguments));
  }

  _createClass(ProgressBar, [{
    key: 'render',
    value: function render() {
      var failed = this.props.value < 0;
      var inProgress = this.props.value < 1 && this.props.value >= 0;
      var classes = (0, _classnames2.default)('progress-bar', {
        'progress-bar-failed': failed,
        'progress-bar-in-progress': inProgress,
        'progress-bar-small': this.props.small
      });

      var formatted = formatProgress(this.props.value);

      return _react2.default.createElement(
        'div',
        { className: classes },
        failed ? _react2.default.createElement(
          'div',
          { className: 'progress-bar-text' },
          'L\u1ED7i'
        ) : inProgress ? _react2.default.createElement(
          'div',
          {
            className: 'progress-bar-inner',
            style: { width: formatted } },
          _react2.default.createElement(
            'div',
            { className: 'progress-bar-text' },
            formatted
          )
        ) : _react2.default.createElement(
          'div',
          { className: 'progress-bar-text' },
          'T\u1EA3i xong'
        )
      );
    }
  }]);

  return ProgressBar;
}(_react2.default.Component);

exports.default = ProgressBar;


ProgressBar.propTypes = {
  value: _react2.default.PropTypes.number.isRequired,
  small: _react2.default.PropTypes.bool
};

ProgressBar.defaultProps = {
  small: false
};
module.exports = exports['default'];