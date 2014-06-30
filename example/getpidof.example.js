var getpidof = require('../');

getpidof('node', function(err, pids) {
  console.log('Found '+pids.length+' matching PIDs: ', pids);
});
