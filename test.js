var Rx = require('./node_modules/rx/dist/rx.all.js');

Rx.Observable
.just('Hello World!')
.subscribe(function(value) {
  console.log(value);
});