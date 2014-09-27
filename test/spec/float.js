var expect = require('chai').expect
  , types = require('../..')
  , ArgumentTypeError = types.ArgumentTypeError
  , define = require('cli-define')
  , Option = define.Option;

describe('cli-types:', function() {
  var pi = 3.14159265359;
  var golden = 1.61803398875;

  it('should coerce single value to float', function(done) {
    var value = '' + pi;
    var opt = new Option(
      '-f, --float <float>', 'a float argument');
    var res = types.float(value, opt);
    expect(res).to.eql(pi);
    done();
  });
  it('should error on invalid float', function(done) {
    var value = 'xyz';
    var opt = new Option(
      '-f, --float <float>', 'a float argument');
    function func() {
      types.float(value, opt);
    }
    expect(func).to.throw(ArgumentTypeError);
    done();
  });
  it('should error on invalid float in array', function(done) {
    var value = [pi, golden, 'xyz'];
    var opt = new Option(
      '-f, --float <float>', 'a float argument');
    function func() {
      types.float(value, opt);
    }
    expect(func).to.throw(ArgumentTypeError);
    done();
  });
  it('should coerce multiple values to array of floats', function(done) {
    var value = ['' + pi, '' + golden];
    var opt = new Option(
      '-f, --float <float>', 'a float argument');
    var res = types.float(value, opt);
    expect(res).to.eql([pi, golden]);
    done();
  });
})
