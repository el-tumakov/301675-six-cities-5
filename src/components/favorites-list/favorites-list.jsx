import React from "react";
import PropTypes from "prop-types";
import FavoritesCity from "../favorites-city/favorites-city";
import {CITIES} from "../../const";

const FavoritesList = (props) => {
  const {offers} = props;
  const favoritesOffers = offers.filter((offer) => {
    return offer.favorite ? offer : ``;
  });

  const getFavoritesOffersOfCity = (city) => {
    return favoritesOffers.filter((offer) => {
      return offer.city === city ? offer : ``;
    });
  };

  return (
    <ul className="favorites__list">
      {CITIES.map((city) => (
        getFavoritesOffersOfCity(city).length ?
          <FavoritesCity
            key={city + getFavoritesOffersOfCity(city).length}
            city={city}
            favoritesOffersOfCity={getFavoritesOffersOfCity(city)}
          />
          : ``
      ))}
    </ul>
  );
};

FavoritesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FavoritesList;
