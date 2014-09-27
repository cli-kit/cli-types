var err = require('cli-error');
var errors = require('../../lib/errors');

var Scope = function() {
  err.load(errors);
  this.errors = err.errors;
  this._configure = {stash: {}};
}

Scope.prototype.configure = function() {
  return this._configure;
}

module.exports = function getScope() {
  return new Scope();
};
