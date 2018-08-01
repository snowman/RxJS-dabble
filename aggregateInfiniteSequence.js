var Rx = require('./node_modules/rx/dist/rx.all.js');

// Interval return incremental number infinite, like 0, 1, 2, ...
var avg = Rx.Observable.interval(1000)
  .scan((prev, cur) => {
    return {
      sum: prev.sum + cur,
      count: prev.count + 1
    };
  }, { sum: 0, count: 0 })
  .map(obj => obj.sum / obj.count)

var subscription = avg.subscribe(speed => console.log(speed))
