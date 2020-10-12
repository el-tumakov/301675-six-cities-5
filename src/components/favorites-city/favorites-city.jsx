import React from "react";
import PropTypes from "prop-types";
import FavoritesCard from "../favorites-card/favorites-card";

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
          <FavoritesCard
            key={offer.id}
            offer={offer}
          />
        ))}
      </div>
    </li>
  );
};

FavoritesCity.propTypes = {
  city: PropTypes.string.isRequired,
  favoritesOffersOfCity: PropTypes.object.isRequired,
};

export default FavoritesCity;
