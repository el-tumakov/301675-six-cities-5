import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import OffersListMain from "../offers-list-main/offers-list-main";
import Map from "../map/map";
import CityList from "../city-list/city-list";
import {ActionCreator} from "../../store/action";
import Sort from "../sort/sort";

const MainScreen = (props) => {
  const {
    offers,
    cityOffers,
    onChangeCity,
    getCityOffers,
    activeCity,
    sort,
    onChangeSort
  } = props;

  const coordinates = cityOffers.map((offer) => {
    return (offer.coordinates);
  });

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityList
          offers={offers}
          onChangeCity={onChangeCity}
          getCityOffers={getCityOffers}
          activeCity={activeCity}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cityOffers.length} places to stay in Amsterdam</b>
              <Sort
                activeSort={sort}
                onChangeSort={onChangeSort}
              />
              <OffersListMain offers={cityOffers}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  coordinates={coordinates}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainScreen.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeCity: PropTypes.string.isRequired,
  cityOffers: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeCity: PropTypes.func.isRequired,
  getCityOffers: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
  onChangeSort: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: state.city,
  cityOffers: state.cityOffers,
  sort: state.sort
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  getCityOffers() {
    dispatch(ActionCreator.getCityOffer());
  },
  onChangeSort(sort) {
    dispatch(ActionCreator.changeSort(sort));
  }
});


export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
