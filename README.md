# Module-15-Challenge

Earthquake Map Application
This is a simple web application that displays earthquake data from the USGS GeoJSON API on a map. The application uses Leaflet, an open-source JavaScript library for interactive maps, to visualize earthquake locations and information. The earthquakes are represented on the map using circular markers with different colors and sizes to indicate their depth and magnitude, respectively.

How to Use
Clone or download this repository to your local machine.
Open the index.html file in your web browser.
Functionality
The application performs the following tasks:

Loads a map using the OpenStreetMap tile layer.
Fetches earthquake data from the USGS GeoJSON API.
Parses the data and adds earthquake markers to the map.
Creates a legend explaining the marker colors and sizes.
Functions
getColor(depth)
This function takes the depth of an earthquake as a parameter and returns a color code based on the depth range. Earthquakes with depths less than 10 km are displayed in green, those between 10 km and 30 km are displayed in orange, and earthquakes deeper than 30 km are displayed in red.

getRadius(magnitude)
This function takes the magnitude of an earthquake as a parameter and returns a marker radius based on the magnitude. The radius is calculated as twice the magnitude value, making bigger earthquakes have larger markers on the map.

Configuration
Please replace the data_url variable with the link to your chosen dataset from the USGS GeoJSON Feed. This will ensure that the map displays the most up-to-date earthquake data from the provided source.

Dependencies
This application relies on the following libraries:

Leaflet: An open-source JavaScript library for interactive maps.
Font Awesome: An iconic font and CSS toolkit.
Make sure you have an active internet connection to load the external dependencies and fetch the earthquake data.

Credits
Leaflet: https://leafletjs.com/
Font Awesome: https://fontawesome.com/
USGS GeoJSON API: https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
