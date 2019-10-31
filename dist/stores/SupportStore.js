'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SupportActions = require('../actions/SupportActions');

var _SupportActions2 = _interopRequireDefault(_SupportActions);

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

exports.default = _alt2.default.createStore(function () {
  function SupportStore() {
    _classCallCheck(this, SupportStore);

    this.bindActions(_SupportActions2.default);
    this.isSupported = true;
    this.isChrome = false;
  }

  _createClass(SupportStore, [{
    key: 'onNoSupport',
    value: function onNoSupport() {
      this.isSupported = false;
    }
  }, {
    key: 'onIsChrome',
    value: function onIsChrome() {
      this.isChrome = true;
    }
  }]);

  return SupportStore;
}(), 'SupportStore');
module.exports = exports['default'];