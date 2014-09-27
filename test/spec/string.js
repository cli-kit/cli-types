var expect = require('chai').expect
  , types = require('../..')
  , define = require('cli-define')
  , Option = define.Option;

describe('cli-types:', function() {
  it('should be a string', function(done) {
    var value = 'value';
    var opt = new Option(
      '-s, --string <str>', 'a string argument');
    var res = types.string(value, opt);
    expect(res).to.eql(value);
    done();
  });
})
