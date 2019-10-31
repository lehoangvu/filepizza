'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var alt = require('../alt');
var routes = require('../routes');

function isNotFound(state) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = state.routes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var r = _step.value;

      if (r.isNotFound) return true;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return false;
}

module.exports = function (req, res) {

  alt.bootstrap(JSON.stringify(res.locals.data || {}));

  ReactRouter.run(routes, req.url, function (Handler, state) {

    var html = React.renderToString(React.createElement(Handler, { data: alt.takeSnapshot() }));
    alt.flush();

    res.setHeader('Content-Type', 'text/html');
    if (isNotFound(state)) res.status(404);
    res.write('<!DOCTYPE html>\n');
    res.end(html);
  });
};