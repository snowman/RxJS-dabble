var QUAKE_URL = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/'
              + 'summary/all_day.geojsonp';

function loadJSONP(url) {
  var script = document.createElement('script');
  script.src = url;
  var head = document.getElementsByTagName('head')[0];
  head.appendChild(script);
}

var map = L.map('map').setView([33.858631, -118.279602], 7);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

var quakes = Rx.Observable
  .interval(5000)
  .flatMap(function () {
    return Rx.DOM.jsonpRequest({
      url: QUAKE_URL,
      jsonpCallback: 'eqfeed_callback'
    }).retry(3)
  })
  .flatMap(result => {
    debugger
    return Rx.Observable.from(result.response.features)
  })
  .distinct(quake => quake.properties.code)
  .map(quake => {
    return {
      lat: quake.geometry.coordinates[1],
      lng: quake.geometry.coordinates[0],
      size: quake.properties.mag * 10000
    }
  })

quakes.subscribe(quake => {
  L.circle([quake.lat, quake.lng], quake.size).addTo(map);
})
