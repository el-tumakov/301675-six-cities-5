import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import withOfferCard from "../../hocs/with-offer-card/with-offer-card";
import {ScreenTypes} from "../../const";

const OfferCardWrapped = withOfferCard(OfferCard);

const OffersList = (props) => {
  const {offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCardWrapped
          key={offer.id}
          offer={offer}
          screenType={ScreenTypes.MAIN}
        />
      ))}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default OffersList;
