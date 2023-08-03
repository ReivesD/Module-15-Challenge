function getColor(depth) {
  return depth < 10 ? 'green' :
         depth < 30 ? 'orange' :
         'red';
}

function getRadius(magnitude) {
  return magnitude * 2;
}

var mymap = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var data_url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

fetch(data_url)
  .then(response => response.json())
  .then(data => {
    data.features.forEach(feature => {
      var lat = feature.geometry.coordinates[1];
      var lon = feature.geometry.coordinates[0];
      var depth = feature.geometry.coordinates[2];
      var magnitude = feature.properties.mag;
      var place = feature.properties.place;

      var popupText = `Location: ${place}<br>Magnitude: ${magnitude}<br>Depth: ${depth} km`;

      var circle = L.circleMarker([lat, lon], {
        radius: getRadius(magnitude),
        color: getColor(depth),
        fillOpacity: 0.7
      }).bindPopup(popupText);

      circle.addTo(mymap);
    });

    var legend = L.control({ position: 'bottomleft' });
    legend.onAdd = function (map) {
      var div = L.DomUtil.create('div', 'info legend');
      div.innerHTML += '<b>Depth</b><br>';
      div.innerHTML += '<i class="fas fa-circle" style="color:green"></i> < 10 km<br>';
      div.innerHTML += '<i class="fas fa-circle" style="color:orange"></i> 10-30 km<br>';
      div.innerHTML += '<i class="fas fa-circle" style="color:red"></i> > 30 km<br>';
      div.innerHTML += '<hr>';
      div.innerHTML += '<b>Magnitude</b><br>';
      div.innerHTML += '<i class="fas fa-circle" style="color:' + getColor(0) + '"></i> 0<br>';
      div.innerHTML += '<i class="fas fa-circle" style="color:' + getColor(5) + '"></i> 5<br>';
      div.innerHTML += '<i class="fas fa-circle" style="color:' + getColor(10) + '"></i> 10<br>';
      return div;
    };
    legend.addTo(mymap);
  })
  .catch(error => console.error('Error fetching earthquake data:', error));

