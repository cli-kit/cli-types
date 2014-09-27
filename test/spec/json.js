var expect = require('chai').expect
  , types = require('../..')
  , ArgumentTypeError = types.ArgumentTypeError
  , define = require('cli-define')
  , Option = define.Option;

describe('cli-types:', function() {
  it('should be a parsed object (json)', function(done) {
    var value =
      {string: 'value', number: 128, boolean: true, obj: {}, arr: [1,2,3]};
    var stringified = JSON.stringify(value);
    var opt = new Option('-j, --json <j>', 'a json argument')
    var res = types.json(stringified, opt);
    expect(res).to.eql(value);
    done();
  });
  it('should error on malformed json', function(done) {
    var stringified = '"escaped \" quote and malformed escape \<"';
    var opt = new Option('-j, --json <j>', 'a json argument')
    function func() {
      types.json(stringified, opt);
    }
    expect(func).to.throw(ArgumentTypeError);
    done();
  });
})
