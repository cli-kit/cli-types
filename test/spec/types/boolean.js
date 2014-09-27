var expect = require('chai').expect
  , types = require('../../..')
  , define = require('cli-define')
  , Option = define.Option;

describe('cli-types:', function() {
  it('should coerce to boolean (true)', function(done) {
    var value = 'true';
    var opt = new Option(
      '-b, --boolean <boolean>', 'a boolean argument');
    var res = types.boolean(value, opt);
    expect(res).to.eql(true);
    done();
  });
  it('should coerce to boolean (false)', function(done) {
    var value = 'false';
    var opt = new Option(
      '-b, --boolean <boolean>', 'a boolean argument');
    var res = types.boolean(value, opt);
    expect(res).to.eql(false);
    done();
  });
  it('should coerce to boolean (true) insensitive', function(done) {
    var value = 'TRUE';
    var opt = new Option(
      '-b, --boolean <boolean>', 'a boolean argument');
    var res = types.boolean(value, opt);
    expect(res).to.eql(true);
    done();
  });
  it('should coerce to boolean (false) insensitive', function(done) {
    var value = 'FALSE';
    var opt = new Option(
      '-b, --boolean <boolean>', 'a boolean argument');
    var res = types.boolean(value, opt);
    expect(res).to.eql(false);
    done();
  });
  it('should coerce to boolean (true) integer', function(done) {
    var value = '1';
    var opt = new Option(
      '-b, --boolean <boolean>', 'a boolean argument');
    var res = types.boolean(value, opt);
    expect(res).to.eql(true);
    done();
  });
  it('should coerce to boolean (false) integer', function(done) {
    var value = '0';
    var opt = new Option(
      '-b, --boolean <boolean>', 'a boolean argument');
    var res = types.boolean(value, opt);
    expect(res).to.eql(false);
    done();
  });
  it('should coerce to boolean (true) positive string length', function(done) {
    var value = 'value';
    var opt = new Option(
      '-b, --boolean <boolean>', 'a boolean argument');
    var res = types.boolean(value, opt);
    expect(res).to.eql(true);
    done();
  });

  it('should coerce to array of booleans', function(done) {
    var value = ['true', 'False', '1', '0'];
    var opt = new Option(
      '-b, --boolean <boolean>', 'a boolean argument');
    var res = types.boolean(value, opt);
    expect(res).to.eql([true, false, true, false]);
    done();
  });

})
