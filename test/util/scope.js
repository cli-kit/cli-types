var err = require('cli-error');
var errors = require('../../lib/errors');

var Scope = function() {
  err.load(errors);
  this.errors = err.errors;
}

module.exports = new Scope();
