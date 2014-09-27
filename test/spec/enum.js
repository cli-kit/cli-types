var expect = require('chai').expect
  , types = require('../..')
  , ArgumentTypeError = types.ArgumentTypeError
  , define = require('cli-define')
  , Option = define.Option;

describe('cli-types:', function() {
  it('should be allowed by enum list', function(done) {
    var list = ['css', 'scss', 'less'];
    var value = 'css';
    var opt =
      new Option('-e, --enum <value>',
        'an enum argument', types.enum(list))
    var converter = opt.converter();
    var res = converter(value, opt);
    expect(res).to.eql(value);
    done();
  });

  it('should throw error on invalid enum value', function(done) {
    var list = ['css', 'scss', 'less'];
    var value = 'sass';
    var opt =
      new Option('-e, --enum <value>',
        'an enum argument', types.enum(list))
    var converter = opt.converter();
    function func() {
      converter(value, opt);
    }
    expect(func).to.throw(ArgumentTypeError);
    done();
  });

  it('should wrap non-array as enum array list', function(done) {
    var list = 'css';
    var value = 'css';
    var opt =
      new Option('-e, --enum <value>',
        'an enum argument', types.enum(list))
    var converter = opt.converter();
    var res = converter(value, opt);
    expect(res).to.eql(value);
    done();
  });

  it('should allow primitive in enum list (null)', function(done) {
    var list = [null, false, true, 1, -1, undefined];
    var value = 'null';
    var opt =
      new Option('-e, --enum <value>',
        'an enum argument', types.enum(list, true))
    var converter = opt.converter();
    var res = converter(value, opt);
    expect(res).to.eql(null);
    done();
  });

  it('should allow primitive in enum list (false)', function(done) {
    var list = [null, false, true, 1, -1, undefined];
    var value = 'false';
    var opt =
      new Option('-e, --enum <value>',
        'an enum argument', types.enum(list, true))
    var converter = opt.converter();
    var res = converter(value, opt);
    expect(res).to.eql(false);
    done();
  });

  it('should allow primitive in enum list (true)', function(done) {
    var list = [null, false, true, 1, -1, undefined];
    var value = 'true';
    var opt =
      new Option('-e, --enum <value>',
        'an enum argument', types.enum(list, true))
    var converter = opt.converter();
    var res = converter(value, opt);
    expect(res).to.eql(true);
    done();
  });

  it('should allow primitive in enum list (1)', function(done) {
    var list = [null, false, true, 1, -1, undefined];
    var value = '1';
    var opt =
      new Option('-e, --enum <value>',
        'an enum argument', types.enum(list, true))
    var converter = opt.converter();
    var res = converter(value, opt);
    expect(res).to.eql(1);
    done();
  });

  it('should allow primitive in enum list (-1)', function(done) {
    var list = [null, false, true, 1, -1, undefined];
    var value = '-1';
    var opt =
      new Option('-e, --enum <value>',
        'an enum argument', types.enum(list, true))
    var converter = opt.converter();
    var res = converter(value, opt);
    expect(res).to.eql(-1);
    done();
  });

  it('should allow primitive in enum list (undefined)', function(done) {
    var list = [null, false, true, 1, -1, undefined];
    var value = 'undefined';
    var opt =
      new Option('-e, --enum <value>',
        'an enum argument', types.enum(list, true))
    var converter = opt.converter();
    var res = converter(value, opt);
    expect(res).to.eql(undefined);
    done();
  });

  it('should allow primitive in enum list (string)', function(done) {
    var list = [null, false, true, 1, -1, undefined, 'string'];
    var value = 'string';
    var opt =
      new Option('-e, --enum <value>',
        'an enum argument', types.enum(list, true))
    var converter = opt.converter();
    var res = converter(value, opt);
    expect(res).to.eql('string');
    done();
  });

  it('should be allowed by enum list (repeatable)', function(done) {
    var list = ['css', 'scss', 'less'];
    var value = ['css', 'scss'];
    var opt =
      new Option('-e, --enum <value>',
        'an enum argument', types.enum(list));
    var converter = opt.converter();
    var res = converter(value, opt);
    expect(res).to.eql(value);
    done();
  });

  it('should allow primitives in enum list (repeatable)', function(done) {
    var list = [null, false, true, 1, -1, undefined, 'string'];
    var value = ['null', 'false', 'true', '1', '-1', undefined, 'string'];
    var expected = [null, false, true, 1, -1, undefined, 'string'];
    var opt =
      new Option('-e, --enum <value>',
        'an enum argument', types.enum(list, true));
    var converter = opt.converter();
    var res = converter(value, opt);
    expect(res).to.eql(expected);
    done();
  });
})
