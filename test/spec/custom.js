var expect = require('chai').expect
  , types = require('../..')
  , define = require('cli-define')
  , Option = define.Option;

describe('cli-types:', function() {
  it('should use custom converter function (always error)', function(done) {
    var custom = function(value, arg, index) {
      throw new Error('Invalid value');
    }
    var value = 'value';
    var opt = new Option(
      '-a', 'an array argument', custom);
    function func() {
      var converter = opt.converter();
      converter(value, opt);
    }
    expect(func).to.throw(Error);
    done();
  });
})
