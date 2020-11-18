import React from "react";
import FavoritesCity from "../favorites-city/favorites-city";
import {CITIES} from "../../const";
import {offersProps} from "../../prop-types";


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
  favoriteOffers: offersProps
};

export default FavoritesList;

