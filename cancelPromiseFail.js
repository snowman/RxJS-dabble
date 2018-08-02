var Rx = require('./node_modules/rx/dist/rx.all.js');

var p = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Success");
});

p.then((msg) => console.log(`p.then: ${msg}`));

var subscription = Rx.Observable.fromPromise(p)
  .subscribe((msg) => console.log(`subscription: ${msg}`));

subscription.dispose();
