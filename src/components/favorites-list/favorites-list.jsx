import React from "react";
import PropTypes from "prop-types";
import FavoritesCity from "../favorites-city/favorites-city";
import {CITIES} from "../../const";

const FavoritesList = (props) => {
  const {favoriteOffers} = props;

  const getFavoritesOffersOfCity = (city) => {
    return favoriteOffers.filter((offer) => {
      return offer.city.name === city ? offer : ``;
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
  favoriteOffers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default FavoritesList;

