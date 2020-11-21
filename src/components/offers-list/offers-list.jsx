import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import {offersProps} from "../../prop-types";
import {ScreenTypes} from "../../const";


const OffersList = (props) => {
  const {
    offers,
    screenType
  } = props;

  let className = ``;

  switch (screenType) {
    case ScreenTypes.MAIN:
      className = `cities__places-list places__list tabs__content`;

      break;
    case ScreenTypes.ROOM:
      className = `near-places__list places__list`;

      break;
    case ScreenTypes.FAVORITE:
      className = `favorites__places`;

      break;
  }

  return (
    <div className={className}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          screenType={screenType}
        />
      ))}
    </div>
  );
};

OffersList.propTypes = {
  offers: offersProps,
  screenType: PropTypes.string.isRequired,
};

export default OffersList;
