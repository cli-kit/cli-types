var expect = require('chai').expect
  , types = require('../..')
  , ArgumentTypeError = types.ArgumentTypeError
  , define = require('cli-define')
  , Option = define.Option;

var files = {
  file: __filename,
  dir: __dirname,
  missing: 'this-file-really-does-not-want-to-be-found.txt'
}

var scope = require('../util/scope');

describe('cli-types:', function() {

  it('should throw error on unsupported expression', function(done) {
    function fn() {
      var opt = new Option(
        '-f, --file <file>', 'a file argument', types.file('Z'));
    }
    expect(fn).throws(Error);
    done();
  });

  it('should not resolve path', function(done) {
    var value = files.file;
    var opt = new Option(
      '-f, --file <file>', 'a file argument', types.file('f', false));
    var converter = opt.converter();
    var res = converter(value, opt);
    expect(res).to.eql(value);
    done();
  });

  it('should be a file type', function(done) {
    var value = files.file;
    var opt = new Option(
      '-f, --file <file>', 'a file argument', types.file('f'));
    var converter = opt.converter();
    var res = converter(value, opt);
    expect(res).to.eql(value);
    done();
  });

  it('should be a readable file', function(done) {
    var value = files.file;
    var opt = new Option(
      '-f, --file <file>', 'a file argument', types.file('rf'));
    var converter = opt.converter();
    var res = converter(value, opt);
    expect(res).to.eql(value);
    done();
  });

  it('should be a file type (repeatable)', function(done) {
    var value = [files.file, files.file];
    var opt = new Option(
      '-f, --file <file>', 'a file argument', types.file('f'));
    var converter = opt.converter();
    var res = converter(value, opt);
    expect(res).to.eql(value);
    done();
  });

  it('should throw argument type error (-f)', function(done) {
    var value = files.missing;
    var opt = new Option(
      '-f, --file <file>', 'a file argument', types.file('f'));
    var converter = opt.converter();
    function fn() {
      converter.call(scope, value, opt);
    }
    expect(fn).throws(ArgumentTypeError);
    expect(fn).throws(/not a file/);
    done();
  });

  it('should throw argument type error (-d)', function(done) {
    var value = files.missing;
    var opt = new Option(
      '-f, --file <file>', 'a file argument', types.file('d'));
    var converter = opt.converter();
    function fn() {
      converter.call(scope, value, opt);
    }
    expect(fn).throws(ArgumentTypeError);
    expect(fn).throws(/not a directory/);
    done();
  });

  it('should throw argument type error (-e)', function(done) {
    var value = files.missing;
    var opt = new Option(
      '-f, --file <file>', 'a file argument', types.file('e'));
    var converter = opt.converter();
    function fn() {
      converter.call(scope, value, opt);
    }
    expect(fn).throws(ArgumentTypeError);
    expect(fn).throws(/does not exist/);
    done();
  });

  it('should throw argument type error (-x)', function(done) {
    var value = files.missing;
    var opt = new Option(
      '-f, --file <file>', 'a file argument', types.file('x'));
    var converter = opt.converter();
    function fn() {
      converter.call(scope, value, opt);
    }
    expect(fn).throws(ArgumentTypeError);
    expect(fn).throws(/is not executable/);
    done();
  });

  it('should throw argument type error (-r)', function(done) {
    var value = files.missing;
    var opt = new Option(
      '-f, --file <file>', 'a file argument', types.file('r'));
    var converter = opt.converter();
    function fn() {
      converter.call(scope, value, opt);
    }
    expect(fn).throws(ArgumentTypeError);
    expect(fn).throws(/is not readable/);
    done();
  });

  it('should throw argument type error (-w)', function(done) {
    var value = files.missing;
    var opt = new Option(
      '-f, --file <file>', 'a file argument', types.file('w'));
    var converter = opt.converter();
    function fn() {
      converter.call(scope, value, opt);
    }
    expect(fn).throws(ArgumentTypeError);
    expect(fn).throws(/is not writable/);
    done();
  });

  it('should throw argument type error (-L)', function(done) {
    var value = files.missing;
    var opt = new Option(
      '-f, --file <file>', 'a file argument', types.file('L'));
    var converter = opt.converter();
    function fn() {
      converter.call(scope, value, opt);
    }
    expect(fn).throws(ArgumentTypeError);
    expect(fn).throws(/is not a symbolic link/);
    done();
  });

  it('should throw argument type error (-S)', function(done) {
    var value = files.missing;
    var opt = new Option(
      '-f, --file <file>', 'a file argument', types.file('S'));
    var converter = opt.converter();
    function fn() {
      converter.call(scope, value, opt);
    }
    expect(fn).throws(ArgumentTypeError);
    expect(fn).throws(/is not a socket/);
    done();
  });

  it('should throw argument type error (-t)', function(done) {
    var value = files.missing;
    var opt = new Option(
      '-f, --file <file>', 'a file argument', types.file('t'));
    var converter = opt.converter();
    function fn() {
      converter.call(scope, value, opt);
    }
    expect(fn).throws(ArgumentTypeError);
    expect(fn).throws(/is not a tty/);
    done();
  });

  it('should throw argument type error (-b)', function(done) {
    var value = files.missing;
    var opt = new Option(
      '-f, --file <file>', 'a file argument', types.file('b'));
    var converter = opt.converter();
    function fn() {
      converter.call(scope, value, opt);
    }
    expect(fn).throws(ArgumentTypeError);
    expect(fn).throws(/is not a block special file/);
    done();
  });

  it('should throw argument type error (-c)', function(done) {
    var value = files.missing;
    var opt = new Option(
      '-f, --file <file>', 'a file argument', types.file('c'));
    var converter = opt.converter();
    function fn() {
      converter.call(scope, value, opt);
    }
    expect(fn).throws(ArgumentTypeError);
    expect(fn).throws(/is not a character special file/);
    done();
  });

  it('should throw argument type error (-p)', function(done) {
    var value = files.missing;
    var opt = new Option(
      '-f, --file <file>', 'a file argument', types.file('p'));
    var converter = opt.converter();
    function fn() {
      converter.call(scope, value, opt);
    }
    expect(fn).throws(ArgumentTypeError);
    expect(fn).throws(/is not a named pipe/);
    done();
  });

  it('should throw argument type error (-z)', function(done) {
    var value = files.missing;
    var opt = new Option(
      '-f, --file <file>', 'a file argument', types.file('z'));
    var converter = opt.converter();
    function fn() {
      converter.call(scope, value, opt);
    }
    expect(fn).throws(ArgumentTypeError);
    expect(fn).throws(/is not the empty string/);
    done();
  });

  it('should throw argument type error (-s)', function(done) {
    var value = '/dev/null';
    var opt = new Option(
      '-f, --file <file>', 'a file argument', types.file('s'));
    var converter = opt.converter();
    function fn() {
      converter.call(scope, value, opt);
    }
    expect(fn).throws(ArgumentTypeError);
    expect(fn).throws(/is an empty file/);
    done();
  });
})
