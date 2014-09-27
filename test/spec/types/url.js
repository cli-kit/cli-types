var expect = require('chai').expect
  , url = require('url')
  , types = require('../../..')
  , ArgumentTypeError = types.ArgumentTypeError
  , define = require('cli-define')
  , Option = define.Option;

describe('cli-types:', function() {
  it('should coerce single value to url', function(done) {
    var u = 'http://nodejs.org';
    var expected = url.parse(u, true, true);
    var opt =
      new Option('-u, --url <url>', 'a url argument', types.url)
    var converter = opt.converter();
    var res = converter(u, opt);
    expect(res).to.be.an('object').that.eqls(expected);
    done();
  });

  it('should coerce scheme less url', function(done) {
    var u = '//nodejs.org?page=10';
    var expected = url.parse(u, true, true);
    var opt =
      new Option('-u, --url <url>', 'a url argument', types.url)
    var converter = opt.converter();
    var res = converter(u, opt);
    expect(res).to.be.an('object').that.eqls(expected);
    done();
  });

  it('should coerce multiple urls', function(done) {
    var u = '//nodejs.org#about';
    var expected = url.parse(u, true, true);
    var opt =
      new Option('-u, --url <url>', 'a url argument', types.url)
    var converter = opt.converter();
    var res = converter([u, u], opt);
    expect(res).to.be.an('array').that.eqls([expected, expected]);
    done();
  });

  it('should error on invalid url (relative)', function(done) {
    var u = '/page#about';
    var expected = url.parse(u, true, true);
    var opt =
      new Option('-u, --url <url>', 'a url argument', types.url)
    var converter = opt.converter();
    function func() {
      converter(u, opt);
    }
    expect(func).to.throw(ArgumentTypeError);
    done();
  });
})
