var expect = require('chai').expect
  , types = require('../../..')
  , ArgumentTypeError = types.ArgumentTypeError
  , define = require('cli-define')
  , Option = define.Option;

describe('cli-types:', function() {
  var d = '2014-02-01';
  var dt = new Date(d);
  it('should coerce single value to date', function(done) {
    var value = d;
    var opt = new Option(
      '-d, --date <d>', 'a date argument');
    var res = types.date(value, opt);
    expect(res).to.eql(dt);
    done();
  });
  it('should error on invalid date', function(done) {
    var value = 'xyz' + d;
    var opt = new Option(
      '-d, --date <d>', 'a date argument');
    function func() {
      types.date(value, opt);
    }
    expect(func).to.throw(ArgumentTypeError);
    done();
  });
  it('should coerce multiple values to array of dates', function(done) {
    var value = [d, d];
    var opt = new Option(
      '-d, --date <d>', 'a date argument');
    var res = types.date(value, opt);
    expect(res).to.eql([dt, dt]);
    done();
  });
  it('should error on invalid date in array', function(done) {
    var value = [d, d, 'xyz'];
    var opt = new Option(
      '-d, --date <d>', 'a date argument');
    function func() {
      types.date(value, opt);
    }
    expect(func).to.throw(ArgumentTypeError);
    done();
  });
})
