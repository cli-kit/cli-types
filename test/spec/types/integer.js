var expect = require('chai').expect
  , types = require('../../..')
  , ArgumentTypeError = types.ArgumentTypeError
  , define = require('cli-define')
  , Option = define.Option;

describe('cli-types:', function() {
  it('should coerce single value to integer', function(done) {
    var value = '10';
    var opt = new Option(
      '-i, --integer <integer>', 'a integer argument');
    var res = types.integer(value, opt);
    expect(res).to.eql(10);
    done();
  });

  it('should error on invalid integer', function(done) {
    var value = 'xyz';
    var opt = new Option(
      '-i, --integer <integer>', 'a integer argument');
    function func() {
      types.integer(value, opt);
    }
    expect(func).to.throw(ArgumentTypeError);
    done();
  });


  //it('should coerce multiple values to array of integers', function(done) {
    //var cli = require('../../..')(pkg);
    //cli.configure({exit:false});
    //var args = ['-i', '10', '--integer=20'];
    //cli
      //.option('-i, --integer <n...>', 'an integer argument', types.integer)
    //cli.parse(args);
    //expect(cli.integer).to.eql([10, 20]);
    //done();
  //});
  //it('should error on invalid integer in array', function(done) {
    //var cli = require('../../..')(pkg);
    //cli.configure({exit:false});
    //var args = ['-i', '10', '--integer', 'zyx'];
    //cli
      //.once('error', function(e) {
        ////expect(cli).to.eql(this);
        ////expect(code).to.eql(codes.ETYPE);
        ////parameters.unshift(message);
        ////console.error.apply(null, parameters);
        //done();
      //})
      //.option('-i, --integer <n...>', 'an integer argument', types.integer)
    //cli.parse(args);
  //});
})
