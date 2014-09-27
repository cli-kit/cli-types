var expect = require('chai').expect
  , types = require('../..')
  , ArgumentTypeError = types.ArgumentTypeError
  , define = require('cli-define')
  , Option = define.Option;

var scope = require('../util/scope');

describe('cli-types:', function() {
  it('should group arguments into object', function(done) {
    var expected = {
      scheme: 'http',
      host: 'nodejs.org',
      port: '80'
    }
    var scheme =
        new Option('-s, --scheme <scheme>',
        'transport scheme', types.object('server'));
    var host =
      new Option('-h, --host <host>',
        'server hostname', types.object('server'));
    var port =
      new Option('-p, --port <n>',
        'server port', types.object('server'))

    var res = scheme.converter().call(scope, expected.scheme, scheme);
    expect(res).to.be.an('object');
    expect(res.scheme).to.eql(expected.scheme);

    res = host.converter().call(scope, expected.host, host);
    expect(res).to.be.an('object');
    expect(res.host).to.eql(expected.host);

    res = port.converter().call(scope, expected.port, port);
    expect(res).to.be.an('object');
    expect(res.port).to.eql(expected.port);

    expect(res).to.eql(scope.configure().stash.server)
      .to.eql(expected);
    done();
  });

  it('should group arguments into object (nested array)', function(done) {
    var expected = {
      scheme: 'http',
      host: ['nodejs.org', 'npmjs.org'],
      port: '80'
    }
    var scheme =
        new Option('-s, --scheme <scheme>',
        'transport scheme', types.object('server'));
    var host =
      new Option('-h, --host <host>',
        'server hostname', types.object('server'));
    var port =
      new Option('-p, --port <n>',
        'server port', types.object('server'))

    var res = scheme.converter().call(scope, expected.scheme, scheme);
    expect(res).to.be.an('object');
    expect(res.scheme).to.eql(expected.scheme);

    res = host.converter().call(scope, expected.host, host);
    expect(res).to.be.an('object');
    expect(res.host).to.eql(expected.host);

    res = port.converter().call(scope, expected.port, port);
    expect(res).to.be.an('object');
    expect(res.port).to.eql(expected.port);

    expect(res).to.eql(scope.configure().stash.server)
      .to.eql(expected);
    done();
  });
})
