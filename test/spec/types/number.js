var expect = require('chai').expect
  , types = require('../../..')
  , ArgumentTypeError = types.ArgumentTypeError
  , define = require('cli-define')
  , Option = define.Option;

describe('cli-types:', function() {
  var pi = 3.14159265359;
  it('should coerce single value to number', function(done) {
    var value = '' + pi;
    var opt = new Option(
      '-n, --number <number>', 'a number argument');
    var res = types.number(value, opt);
    expect(res).to.eql(pi);
    done();
  });
  it('should error on invalid number', function(done) {
    var value = 'xyz';
    var opt = new Option(
      '-n, --number <number>', 'a number argument');
    function func() {
      types.number(value, opt);
    }
    expect(func).to.throw(ArgumentTypeError);
    done();
  });
})
