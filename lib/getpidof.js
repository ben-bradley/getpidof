var exec = require('child_process').exec;

module.exports = getpidof;

function getpidof(cmd, callback) {
  exec('ps -aeo pid,command', function(err, stdout, stderr) {
    if (err)
      callback(err);
    else
      callback(null, parseStdout(stdout, cmd));
  });
};

function parseStdout(stdout, cmd) {
  var lines = stdout.split('\n'),
      pids = [];
  lines.forEach(function(line) {
    var fields = line.match(/\s*(\d+)\s+(.+)/);
    if (fields && fields[2].indexOf(cmd) > -1)
      pids.push({ command: fields[2], pid: Number(fields[1]) });
  });
  return pids;
}
