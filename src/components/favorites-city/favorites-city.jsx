import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import withOfferCard from "../../hocs/with-offer-card/with-offer-card";
import {ScreenTypes} from "../../const";

const OfferCardWrapped = withOfferCard(OfferCard);

const FavoritesCity = (props) => {
  const {city, favoritesOffersOfCity} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favoritesOffersOfCity.map((offer) => (
          <OfferCardWrapped
            key={offer.id}
            offer={offer}
            screenType={ScreenTypes.FAVORITES}
          />
        ))}
      </div>
    </li>
  );
};

FavoritesCity.propTypes = {
  city: PropTypes.string.isRequired,
  favoritesOffersOfCity: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FavoritesCity;
