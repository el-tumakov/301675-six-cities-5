import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {fetchFavoriteOffers} from "../../store/api-actions";
import Header from "../header/header";
import FavoritesFilled from "../favorites-filled/favorites-filled";
import FavoritesEmpty from "../favorites-empty/favorites-empty";
import {offersProps} from "../../prop-types";

const FavoritesScreen = (props) => {
  const {favoriteOffers, onLoadFavoriteOffers} = props;

  useEffect(() => {
    onLoadFavoriteOffers();
  }, []);

  return (
    <div className="page">
      <Header />

      {favoriteOffers.length
        ? <FavoritesFilled favoriteOffers={favoriteOffers} />
        : <FavoritesEmpty />
      }

      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
};

FavoritesScreen.propTypes = {
  favoriteOffers: offersProps,
  onLoadFavoriteOffers: PropTypes.func.isRequired
};

const mapStateToProps = ({DATA}) => ({
  favoriteOffers: DATA.favoriteOffers
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavoriteOffers() {
    dispatch(fetchFavoriteOffers());
  }
});


export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
