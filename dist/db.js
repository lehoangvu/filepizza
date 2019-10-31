'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.find = find;
exports.findShort = findShort;
exports.remove = remove;

var _toppings = require('./toppings');

var _toppings2 = _interopRequireDefault(_toppings);

var _xkcdPassword = require('xkcd-password');

var _xkcdPassword2 = _interopRequireDefault(_xkcdPassword);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TOKEN_OPTIONS = {
  numWords: 4,
  minLength: 3,
  maxLength: 20
};

var SHORT_TOKEN_OPTIONS = {
  length: 8,
  chars: '0123456789abcdefghijklmnopqrstuvwxyz'
};

var tokens = {};
var shortTokens = {};

var tokenGenerator = new _xkcdPassword2.default();
tokenGenerator.initWithWordList(_toppings2.default);

function generateShortToken() {
  var result = '';
  for (var i = SHORT_TOKEN_OPTIONS.length; i > 0; --i) {
    result += SHORT_TOKEN_OPTIONS.chars[Math.floor(Math.random() * SHORT_TOKEN_OPTIONS.chars.length)];
  }return result;
}

function create(socket) {

  return tokenGenerator.generate(TOKEN_OPTIONS).then(function (parts) {
    var token = parts.join('/');
    var shortToken = generateShortToken();
    var result = {
      token: token,
      shortToken: shortToken,
      socket: socket
    };

    tokens[token] = result;
    shortTokens[shortToken] = result;
    return result;
  });
}

function find(token) {
  return tokens[token];
}

function findShort(shortToken) {
  return shortTokens[shortToken.toLowerCase()];
}

function remove(client) {
  if (client == null) return;
  delete tokens[client.token];
  delete shortTokens[client.shortToken];
}