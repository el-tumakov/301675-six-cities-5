import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import OffersListFavorite from "../offers-list-favorite/offers-list-favorite";
import {offersProps} from "../../prop-types";
import {ActionCreator} from "../../store/action";


const FavoritesCity = (props) => {
  const {city, favoritesOffersOfCity, onChangeCity} = props;

  const handleClick = () => {
    onChangeCity(city);
  };

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to="/"
            onClick={handleClick}
          >
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <OffersListFavorite offers={favoritesOffersOfCity}/>
    </li>
  );
};

FavoritesCity.propTypes = {
  city: PropTypes.string.isRequired,
  favoritesOffersOfCity: offersProps,
  onChangeCity: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});


export {FavoritesCity};
export default connect(null, mapDispatchToProps)(FavoritesCity);
