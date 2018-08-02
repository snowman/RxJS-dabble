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

var quakes = Rx.Observable.create(observer => {
  window.eqfeed_callback = function (response) {
    var quakes = response.features;
    quakes.forEach(quake => {
      observer.onNext(quake);
    })
  }

  loadJSONP(QUAKE_URL)
})

quakes.subscribe(quake => {
  var coords = quake.geometry.coordinates;
  var size = quake.properties.mag * 10000;
  var latlng = L.latLng(coords[1], coords[0]);

  L.circle(latlng, size).addTo(map);
})