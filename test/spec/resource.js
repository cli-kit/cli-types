var expect = require('chai').expect
  , url = require('url')
  , types = require('../..')
  , ArgumentTypeError = types.ArgumentTypeError
  , define = require('cli-define')
  , Option = define.Option
  , files = require('../util/files')
  , scope = require('../util/scope')();

describe('cli-types:', function() {
  it('should recognise absolute resource as url', function(done) {
    var u = 'http://nodejs.org';
    var expected = url.parse(u, true, true);
    var opt =
      new Option(
        '-r, --resource <resource>', 'a resource argument',
        types.resource('f'));
    var converter = opt.converter();
    var res = converter(u, opt);
    expect(res).to.be.a('string').that.eqls(u);
    done();
  });

  it('should convert resource to url object', function(done) {
    var u = 'http://nodejs.org';
    var expected = url.parse(u, true, true);
    var opt =
      new Option(
        '-r, --resource <resource>', 'a resource argument',
        types.resource(
          'f', true, null, {url: true, slashes: true, query: true}));
    var converter = opt.converter();
    var res = converter(u, opt);
    expect(res).to.be.an('object').that.eqls(url.parse(u, true, true));
    done();
  });

  it('should accept file as resource', function(done) {
    var value = files.file;
    var opt =
      new Option(
        '-r, --resource <resource>', 'a resource argument',
        types.resource('f'));
    var converter = opt.converter();
    var res = converter(value, opt);
    expect(res).to.be.a('string').that.eqls(value);
    done();
  });

  it('should throw argument type error on invalid file (-f)', function(done) {
    var value = files.missing;
    var opt = new Option(
      '-r, --resource <resource>', 'a resource argument',
      types.resource('f'));
    var converter = opt.converter();
    function fn() {
      converter.call(scope, value, opt);
    }
    expect(fn).throws(ArgumentTypeError);
    expect(fn).throws(/not a file/);
    done();
  });
})
