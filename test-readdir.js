var Rx = require('./node_modules/rx/dist/rx.all.js');
var fs = require('fs');

fs.readdir('.', 'utf8', (err, files) => {
  console.log(files)
})

var readdir = Rx.Observable.fromNodeCallback(fs.readdir);

var dirObservable = readdir('.');

var subscription = dirObservable.subscribe(
  (res) => console.log("List of files: " + res),
  (err) => console.log(err),
  () => console.log("Completed"))
