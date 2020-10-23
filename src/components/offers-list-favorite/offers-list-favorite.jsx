import React from "react";
import PropTypes from "prop-types";
import OffersList from "../offers-list/offers-list";
import OfferCardFavorite from "../offer-card-favorite/offer-card-favorite";

const OfferListFavorite = (props) => {
  const {offers} = props;

  return (
    <OffersList
      className="favorites__places"
      offers={offers}
      Component={OfferCardFavorite}
      {...props}
    />
  );
};

OfferListFavorite.propTypes = {
  offers: PropTypes.array.isRequired
};

export default OfferListFavorite;
