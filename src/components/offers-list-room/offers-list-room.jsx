import React from "react";
import {connect} from "react-redux";
import OffersList from "../offers-list/offers-list";
import OfferCardRoom from "../offer-card-room/offer-card-room";
import {offersProps} from "../../prop-types";


const OfferListRoom = (props) => {
  const {nearbyOffers} = props;

  return (
    <OffersList
      className="near-places__list places__list"
      offers={nearbyOffers}
      Component={OfferCardRoom}
      {...props}
    />
  );
};

OfferListRoom.propTypes = {
  nearbyOffers: offersProps
};

const mapStateToProps = ({DATA}) => ({
  nearbyOffers: DATA.nearbyOffers
});

export {OfferListRoom};
export default connect(mapStateToProps, null)(OfferListRoom);
