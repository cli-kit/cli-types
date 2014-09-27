var expect = require('chai').expect
  , types = require('../../..')
  , ArgumentTypeError = types.ArgumentTypeError
  , define = require('cli-define')
  , Option = define.Option;

describe('cli-types:', function() {
  var pi = 3.14159265359;
  var golden = 1.61803398875;
  it('should coerce single value to float', function(done) {
    var value = '' + pi;
    var opt = new Option(
      '-f, --float <float>', 'a float argument');
    var res = types.float(value, opt);
    expect(res).to.eql(pi);
    done();
  });
  it('should error on invalid float', function(done) {
    var value = 'xyz';
    var opt = new Option(
      '-f, --float <float>', 'a float argument');
    function func() {
      types.float(value, opt);
    }
    expect(func).to.throw(ArgumentTypeError);
    done();
  });
  //it('should coerce multiple values to array of floats', function(done) {
    //var cli = require('../../..')(pkg);
    //cli.configure({exit:false});
    //var args = ['-f', '' + pi, '--float=' + golden];
    //cli
      //.option('-f, --float <n...>', 'a float argument', types.float)
    //cli.parse(args);
    //expect(cli.float).to.eql([pi, golden]);
    //done();
  //});
  //it('should error on invalid float', function(done) {
    //var cli = require('../../..')(pkg);
    //cli.configure({exit:false});
    //var args = ['-f', 'xyz'];
    //cli
      //.once('error', function(e) {
        ////expect(cli).to.eql(this);
        ////expect(code).to.eql(codes.ETYPE);
        ////parameters.unshift(message);
        ////console.error.apply(null, parameters);
        //done();
      //})
      //.option('-f, --float <n>', 'a float argument', types.float)
    //cli.parse(args);
  //});
  //it('should error on invalid float in array', function(done) {
    //var cli = require('../../..')(pkg);
    //cli.configure({exit:false});
    //var args = ['-f', '' + pi, '--float=' + golden, '--float', 'zyx'];
    //cli
      //.once('error', function(e) {
        ////expect(cli).to.eql(this);
        ////expect(code).to.eql(codes.ETYPE);
        ////parameters.unshift(message);
        ////console.error.apply(null, parameters);
        //done();
      //})
      //.option('-f, --float <n...>', 'a float argument', types.float)
    //cli.parse(args);
  //});
})
