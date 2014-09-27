var expect = require('chai').expect
  , types = require('../../..')
  , ArgumentTypeError = types.ArgumentTypeError
  , define = require('cli-define')
  , Option = define.Option;

describe('cli-types:', function() {
  it('should coerce single value to integer', function(done) {
    var value = '10';
    var opt = new Option(
      '-i, --integer <integer>', 'a integer argument');
    var res = types.integer(value, opt);
    expect(res).to.eql(10);
    done();
  });
  it('should error on invalid integer', function(done) {
    var value = 'xyz';
    var opt = new Option(
      '-i, --integer <integer>', 'a integer argument');
    function func() {
      types.integer(value, opt);
    }
    expect(func).to.throw(ArgumentTypeError);
    done();
  });
  it('should error on invalid integer in array', function(done) {
    var value = ['10', 'xyz'];
    var opt = new Option(
      '-i, --integer <integer>', 'a integer argument');
    function func() {
      types.integer(value, opt);
    }
    expect(func).to.throw(ArgumentTypeError);
    done();
  });
  it('should coerce multiple values to array of integers', function(done) {
    var value = ['10', '20'];
    var expected = [10, 20];
    var opt = new Option(
      '-i, --integer <integer>', 'a integer argument');
    var res = types.integer(value, opt);
    expect(res).to.eql(expected);
    done();
  });
})
