import React from "react";
import {connect} from "react-redux";
import Map from "../map/map";
import {oneOfferProps, offersProps} from "../../prop-types";


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
  currentOffer: oneOfferProps,
  nearbyOffers: offersProps
};

const mapStateToProps = ({DATA}) => ({
  nearbyOffers: DATA.nearbyOffers
});

export {MapRoom};
export default connect(mapStateToProps)(MapRoom);
