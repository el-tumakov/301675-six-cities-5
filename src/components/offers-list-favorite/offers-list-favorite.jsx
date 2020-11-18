import React from "react";
import OffersList from "../offers-list/offers-list";
import OfferCardFavorite from "../offer-card-favorite/offer-card-favorite";
import {offersProps} from "../../prop-types";


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
  offers: offersProps
};

export default OfferListFavorite;
