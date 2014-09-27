var expect = require('chai').expect
  , types = require('../../..')
  , ArgumentTypeError = types.ArgumentTypeError
  , define = require('cli-define')
  , Option = define.Option;

describe('cli-types:', function() {
  var d = '2014-02-01';
  var dt = new Date(d);
  it('should coerce single value to date', function(done) {
    var value = d;
    var opt = new Option(
      '-d, --date <d>', 'a date argument');
    var res = types.date(value, opt);
    expect(res).to.eql(dt);
    done();
  });
  it('should error on invalid date', function(done) {
    var value = 'xyz' + d;
    var opt = new Option(
      '-d, --date <d>', 'a date argument');
    function func() {
      types.date(value, opt);
    }
    expect(func).to.throw(ArgumentTypeError);
    done();
  });
  //it('should coerce multiple values to array of dates', function(done) {
    //var cli = require('../../..')(pkg);
    //cli.configure({exit:false});
    //var args = ['-d', d, '--date=' + d];
    //cli
      //.option('-d, --date <date...>', 'a date argument', types.date)
      //.parse(args);
    //expect(cli.date).to.eql([dt, dt]);
    //done();
  //});
  //it('should error on invalid date in array', function(done) {
    //var cli = require('../../..')(pkg);
    //cli.configure({exit:false});
    //var args = ['-d', d, '--date=' + d, '--date', d + 'zyx'];
    //cli
      //.once('error',function(e) {
        ////expect(cli).to.eql(this);
        ////expect(code).to.eql(codes.ETYPE);
        ////parameters.unshift(message);
        ////console.error.apply(null, parameters);
        //done();
      //})
      //.option('-d, --date <date...>', 'a date argument', types.date)
    //cli.parse(args);
  //});
})
