import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import CitiesOffers from "../cities-offers/cities-offers";
import MapMain from "../map-main/map-main";
import CityList from "../city-list/city-list";
import MainEmpty from "../main-empty/main-empty";
import Header from "../header/header";
import {ActionCreator} from "../../store/action";
import {offersProps} from "../../prop-types";


const MainScreen = (props) => {
  const {
    offers,
    onChangeCity,
    activeCity,
  } = props;

  const cityOffers = offers.filter((offer) => offer.city.name === activeCity);

  return (
    <div className="page page--gray page--main">
      <Header />

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
                  <MapMain
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
  offers: offersProps,
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
