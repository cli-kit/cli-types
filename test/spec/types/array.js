var expect = require('chai').expect
  , types = require('../../..')
  , define = require('cli-define')
  , Option = define.Option;

describe('cli-types:', function() {
  it('should be an array (single value)', function(done) {
    var value = 'value';
    var opt = new Option(
      '-a, --array <a>', 'an array argument', types.array);
    var res = types.array(value, opt);
    expect(res).to.eql([value]);
    done();
  });
  it('should be an array (multiple value)', function(done) {
    var value = 'value';
    var opt = new Option(
      '-a, --array <a>', 'an array argument', types.array);
    var res = types.array([value, value, value], opt);
    expect(res).to.eql([value, value, value]);
    done();
  });
})
