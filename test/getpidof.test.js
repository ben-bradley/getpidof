var should = require('should'),
    getpidof = require('../');

describe('getpidof', function() {
  var PIDS = [];

  before(function(done) {
    getpidof('cron', function(err, pids) {
      PIDS = pids;
      done();
    });
  });

  it('should return an array for `cron`', function() {
    (PIDS).should.be.an.Array;
  })

  it('which should have at least one result', function() {
    (PIDS[0]).should.exist;
  })

  describe('results in the array', function() {

    it('results should be objects', function() {
      (PIDS[0]).should.be.an.Object;
    })

    it('results should have a command property', function() {
      (PIDS[0]).should.have.property('command');
    })

    it('the `command` property of a result should be a String', function() {
      (PIDS[0].command).should.be.a.String;
    })

    it('results should have a pid property', function() {
      (PIDS[0]).should.have.property('pid');
    })

    it('the `pid` property of a result should be a Number', function() {
      (PIDS[0].pid).should.be.a.Number;
    })

  })
})
