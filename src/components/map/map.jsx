import React, {useRef, useEffect} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";


const icon = leaflet.icon({
  iconUrl: `/img/pin.svg`,
  iconSize: [30, 30]
});
const activeIcon = leaflet.icon({
  iconUrl: `/img/pin-active.svg`,
  iconSize: [30, 30]
});

let city = ``;
let map = ``;
let markers = [];
let activeMarker = ``;

const initializeMap = (offers) => {
  city = offers[0].city;

  const coordinates = [
    city.location.latitude,
    city.location.longitude
  ];

  map.setView(coordinates, city.location.zoom);
};

const initializeMarkers = (offers, activeOfferId) => {
  for (let marker of markers) {
    marker.remove();
  }

  markers = [];

  for (let offer of offers) {
    const offerCoordinates = [
      offer.location.latitude,
      offer.location.longitude
    ];

    markers.push(
        leaflet.marker(offerCoordinates, {icon, offerId: offer.id})
    );
  }

  if (activeOfferId) {
    activeMarker = markers.find((marker) => (
      marker.options.offerId === activeOfferId
    ));

    activeMarker.setIcon(activeIcon);
  }

  for (let marker of markers) {
    marker.addTo(map);
  }
};

const Map = (props) => {
  const {offers, activeOfferId, hoveredOffer} = props;

  const mapRef = useRef(null);

  useEffect(() => {
    map = leaflet.map(mapRef.current, {
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    initializeMap(offers);
    initializeMarkers(offers, activeOfferId);
  }, []);

  useEffect(() => {
    if (activeOfferId) {
      initializeMap(offers);
      initializeMarkers(offers, activeOfferId);

      return;
    }
    if (city.name !== offers[0].city.name) {
      initializeMap(offers);
      initializeMarkers(offers, activeOfferId);

      return;
    }

    if (activeMarker) {
      activeMarker.setIcon(icon);
      activeMarker = ``;
    }

    if (hoveredOffer) {
      activeMarker = markers.find((marker) => (
        marker.options.offerId === hoveredOffer.id
      ));

      activeMarker.setIcon(activeIcon);
    }
  });

  return (
    <div ref={mapRef} id="map" style={{height: `100%`}}/>
  );
};

Map.propTypes = {
  activeOfferId: PropTypes.number,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  hoveredOffer: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Map;
