import React from "react";
import PropTypes from "prop-types";
import FavoritesList from "../favorites-list/favorites-list";


const FavoritesFilled = (props) => {
  const {favoriteOffers} = props;

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoritesList favoriteOffers={favoriteOffers}/>
        </section>
      </div>
    </main>
  );
};

FavoritesFilled.propTypes = {
  favoriteOffers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default FavoritesFilled;
