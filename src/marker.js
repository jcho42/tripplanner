import mapboxgl from "mapbox-gl";

const markerImages = {
  Activity: 'http://i.imgur.com/WbMOfMl.png',
  Hotel: 'http://i.imgur.com/D9574Cu.png',
  Restaurant: 'http://i.imgur.com/cqR6pUI.png',
};

const addMarker = function (type, coordinates) {
  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = `url(${markerImages[type]})`;

  return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);
};

export default addMarker;
