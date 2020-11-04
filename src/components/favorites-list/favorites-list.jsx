import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import FavoritesCity from "../favorites-city/favorites-city";
import {fetchFavoriteOffers} from "../../store/api-actions";
import {CITIES} from "../../const";

const FavoritesList = (props) => {
  const {favoriteOffers, loadFavoriteOffers} = props;

  useEffect(() => {
    loadFavoriteOffers();
  }, []);

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
  favoriteOffers: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadFavoriteOffers: PropTypes.func.isRequired
};

const mapStateToProps = ({DATA}) => ({
  favoriteOffers: DATA.favoriteOffers
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteOffers() {
    dispatch(fetchFavoriteOffers());
  }
});


export {FavoritesList};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);

