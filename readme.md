# getpidof

Inspired by https://github.com/calmh/node-pidof

## Example

Get all the PIDs with `node` in the command:
```js
var getpidof = require('getpidof');

getpidof('node', function(err, pids) {
  console.log('Found '+pids.length+' matching PIDs: ', pids);
});

```

Get the PIDS matching `node ./app.js`:
```js
var getpidof = require('getpidof');

getpidof('node ./app.js', function(err, pids) {
  console.log('Found '+pids.length+' matching PIDs: ', pids);
});

```
