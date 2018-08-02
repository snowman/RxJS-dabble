var Rx = require('./node_modules/rx/dist/rx.all.js');
var requestStream = Rx.Observable.just('https://api.github.com/users');
var jQuery = require('./node_modules/jquery/dist/jquery.js');

var responseMetastream = requestStream.flatMap(requestUrl => {
    return Rx.Observable.fromPromise(jQuery.getJSON(requestUrl))
});

responseMetastream.subscribe(url => {console.log(url)})
