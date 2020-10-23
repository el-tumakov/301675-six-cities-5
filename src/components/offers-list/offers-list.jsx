import React from "react";
import PropTypes from "prop-types";
import OfferCardMain from "../offer-card-main/offer-card-main";

const OffersList = (props) => {
  const {offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCardMain
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default OffersList;
