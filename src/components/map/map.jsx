import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import {Coordinates} from "../../const";

const ZOOM = 12;

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._city = ``;
    this._coordinates = ``;
    this._map = ``;
    this._markers = [];
    this._activeMarker = ``;
    this._icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });
    this._activeIcon = leaflet.icon({
      iconUrl: `/img/pin-active.svg`,
      iconSize: [30, 30]
    });
  }

  initializeMap() {
    const {offers, city} = this.props;

    this._city = city;
    this._coordinates = Coordinates[this._city.toUpperCase()];
    this._map.setView(this._coordinates, ZOOM);
    this._markers = [];

    for (let offer of offers) {
      this._markers.push(
          leaflet.marker(offer.coordinates, {icon: this._icon, offerId: offer.id})
      );
    }

    for (let marker of this._markers) {
      marker.addTo(this._map);
    }
  }

  componentDidMount() {
    this._map = leaflet.map(`map`, {
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    this.initializeMap();
  }

  componentDidUpdate() {
    const {hoveredOffer, city} = this.props;

    if (this._city !== city) {
      this.initializeMap();
    }

    if (this._activeMarker) {
      this._activeMarker.setIcon(this._icon);
      this._activeMarker = ``;
    }

    if (hoveredOffer) {
      this._activeMarker = this._markers.find((marker) => (
        marker.options.offerId === hoveredOffer.id
      ));

      this._activeMarker.setIcon(this._activeIcon);
    }
  }

  componentWillUnmount() {
    this._city = ``;
    this._coordinates = ``;
    this._map = ``;
    this._markers = [];
    this._activeMarker = ``;
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}/>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  hoveredOffer: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  city: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  hoveredOffer: state.hoveredOffer
});

export {Map};
export default connect(mapStateToProps, null)(Map);
