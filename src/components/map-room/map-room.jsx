import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Map from "../map/map";


const MapRoom = (props) => {
  const {currentOffer, nearbyOffers} = props;

  const offers = [
    currentOffer,
    ...nearbyOffers
  ];

  return (
    <Map
      activeOfferId={currentOffer.id}
      offers={offers}
      {...props}
    />
  );
};

MapRoom.propTypes = {
  currentOffer: PropTypes.object.isRequired,
  nearbyOffers: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = ({DATA}) => ({
  nearbyOffers: DATA.nearbyOffers
});

export {MapRoom};
export default connect(mapStateToProps, null)(MapRoom);
