var Rx = require('./node_modules/rx/dist/rx.all.js');

Rx.Observable.create(observer => {
  observer.onNext(Rx.Observable.range(1, 5))
  observer.onNext(Rx.Observable.range(6, 10))
  observer.onCompleted()
})
.flatMap(observable => {
  var values = [];
  observable.subscribe((value) => values.push(value));
  return Rx.Observable.from(values);
})

.subscribe(function(value) {
  console.log(value);
});
