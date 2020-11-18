import React from "react";
import OffersList from "../offers-list/offers-list";
import OfferCardMain from "../offer-card-main/offer-card-main";
import {offersProps} from "../../prop-types";


const OfferListMain = (props) => {
  const {offers} = props;

  return (
    <OffersList
      className="cities__places-list places__list tabs__content"
      offers={offers}
      Component={OfferCardMain}
      {...props}
    />
  );
};

OfferListMain.propTypes = {
  offers: offersProps
};

export default OfferListMain;
