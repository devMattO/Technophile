var Watch = require('./Watch.js');
var Tablet = require('./Tablet.js');

function SmartWatch() {
  Watch.call(this);
  Tablet.call(this);
}
module.exports = SmartWatch;