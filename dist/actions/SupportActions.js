'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

exports.default = _alt2.default.createActions(function SupportActions() {
  _classCallCheck(this, SupportActions);

  this.generateActions('isChrome', 'noSupport');
});
module.exports = exports['default'];