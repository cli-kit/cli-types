var expect = require('chai').expect
  , types = require('../..')
  , ArgumentTypeError = types.ArgumentTypeError
  , define = require('cli-define')
  , Option = define.Option;

describe('cli-types:', function() {

  it('should be an array list (single value)', function(done) {
    var value = 'value';
    var opt = new Option(
      '-l, --list <list>', 'a comma-delimited list argument');
    var converter = types.list(/\s*,\s*/);
    var res = converter(value, opt);
    expect(res).to.eql([value]);
    done();
  });

  it('should be an array list (multiple value)', function(done) {
    var value = 'apple , orange,pear, mango';
    var opt = new Option(
      '-l, --list <list>', 'a comma-delimited list argument');
    var converter = types.list(/\s*,\s*/);
    var res = converter(value, opt);
    expect(res).to.eql(['apple', 'orange', 'pear', 'mango']);
    done();
  });

  it('should be a multi-dimensional array list (repeatable)', function(done) {
    var one = 'apple , orange,pear, mango';
    var alt = 'banana, watermelon';
    var value = [one, alt];
    var expected = [
      ['apple', 'orange', 'pear', 'mango'], ['banana', 'watermelon']
    ];
    var opt = new Option(
      '-l, --list <list>', 'a comma-delimited list argument');
    var converter = types.list(/\s*,\s*/);
    var res = converter(value, opt);
    expect(res).to.eql(expected);
    done();
  });
});
