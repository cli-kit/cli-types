var expect = require('chai').expect
  , path = require('path')
  , fs = require('cli-fs')
  , types = require('../../..')
  , ArgumentTypeError = types.ArgumentTypeError
  , define = require('cli-define')
  , Option = define.Option;

describe('cli-command:', function() {
  var cwd = process.cwd();
  var home = fs.home();

  it('should resolve relative path', function(done) {
    var file = 'file.txt';
    var opt =
      new Option('-p, --path <path>', 'a path argument');
    var res = types.path(file, opt);
    expect(res).to.eql(path.join(cwd, file));
    done();
  });

  it('should resolve relative path (./)', function(done) {
    var file = 'file.txt';
    var opt =
      new Option('-p, --path <path>', 'a path argument');
    var res = types.path('./' + file, opt);
    expect(res).to.eql(path.join(cwd, file));
    done();
  });

  it('should return untouched with invalid home (~/file.txt)', function(done) {
    var home = process.env.HOME;
    delete process.env.HOME;
    var file = 'file.txt';
    var opt =
      new Option('-p, --path <path>', 'a path argument');
    var res = types.path('~/' + file, opt);
    expect(res).to.eql('~/file.txt');
    process.env.HOME = home;
    done();
  });

  it('should respect absolute path', function(done) {
    var file = '/file.txt';
    var opt =
      new Option('-p, --path <path>', 'a path argument');
    var res = types.path(file, opt);
    expect(res).to.eql(file);
    done();
  });
})
