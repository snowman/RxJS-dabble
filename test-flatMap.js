var Rx = require('./node_modules/rx/dist/rx.all.js');

Rx.Observable.create(observer => {
  observer.onNext(10)
  observer.onNext(2)
  observer.onCompleted()
})
.flatMap(value => {
  return Rx.Observable.range(1, value);
})

.subscribe(function(value) {
  console.log(value);
});
