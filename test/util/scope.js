var err = require('cli-error');
var errors = require('../../lib/errors');
var _configure = {stash: {}};

var Scope = function() {
  err.load(errors);
  this.errors = err.errors;
}

Scope.prototype.configure = function() {
  return _configure;
}

module.exports = new Scope();
