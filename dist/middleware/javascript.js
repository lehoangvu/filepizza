'use strict';

var path = require('path');

var BUNDLE_PATH = path.resolve(__dirname, '../../dist/bundle.js');

if (process.env.NODE_ENV === 'production') {
  module.exports = function (req, res) {
    res.sendFile(BUNDLE_PATH);
  };
} else {
  var webpackMiddleware = require('webpack-dev-middleware');
  var webpack = require('webpack');
  var config = require('../../webpack.config.js');
  config.output.filename = '/app.js';
  config.output.path = '/';
  module.exports = webpackMiddleware(webpack(config));
}