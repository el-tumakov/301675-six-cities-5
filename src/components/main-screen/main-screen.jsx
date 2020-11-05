import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import CitiesOffers from "../cities-offers/cities-offers";
import Map from "../map/map";
import CityList from "../city-list/city-list";
import MainEmpty from "../main-empty/main-empty";
import {ActionCreator} from "../../store/action";


const MainScreen = (props) => {
  const {
    offers,
    onChangeCity,
    activeCity,
  } = props;

  const cityOffers = offers.filter((offer) => offer.city.name === activeCity);

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

      <main className={`page__main page__main--index ${cityOffers.length ? `` : `page__main--index-empty`}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CityList
          onChangeCity={onChangeCity}
          activeCity={activeCity}
        />
        <div className="cities">
          {cityOffers.length ?
            <div className="cities__places-container container">
              <CitiesOffers
                offers={cityOffers}
              />
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    offers={cityOffers}
                  />
                </section>
              </div>
            </div>
            : <MainEmpty city={activeCity}/>
          }
        </div>
      </main>
    </div>
  );
};

MainScreen.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeCity: PropTypes.string.isRequired,
  onChangeCity: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, PROCESS}) => ({
  activeCity: PROCESS.city,
  offers: DATA.offers,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});


export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
