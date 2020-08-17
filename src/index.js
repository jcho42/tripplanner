console.log("test");

import mapboxgl from "mapbox-gl";
import addMarker from "./marker.js";

mapboxgl.accessToken = "pk.eyJ1IjoiYWdyb3NzMTE3IiwiYSI6ImNrZHlxNzNxMDFra2cyc25za2R2emp5YTUifQ.dsRC1XojkNmfLCWwiGBiYg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.641, 41.895], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-87.641, 41.895]).addTo(map);

const newMarker = addMarker("Restaurant", [-87.641, 41.895]);
newMarker.addTo(map);
