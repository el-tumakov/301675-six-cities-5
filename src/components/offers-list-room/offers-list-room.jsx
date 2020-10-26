import React from "react";
import PropTypes from "prop-types";
import OffersList from "../offers-list/offers-list";
import OfferCardRoom from "../offer-card-room/offer-card-room";

const OfferListRoom = (props) => {
  const {offers} = props;

  return (
    <OffersList
      className="near-places__list places__list"
      offers={offers}
      Component={OfferCardRoom}
      {...props}
    />
  );
};

OfferListRoom.propTypes = {
  offers: PropTypes.array.isRequired
};

export default OfferListRoom;
