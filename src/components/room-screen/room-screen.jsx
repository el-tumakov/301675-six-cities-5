import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import RoomInfo from "../room-info/room-info";
import OffersListRoom from "../offers-list-room/offers-list-room";

const MAX_SIMILAR_OFFERS = 3;

const RoomScreen = (props) => {
  const {id, offers} = props;

  const offer = offers.find((item) => item.id === id);
  const city = offer.city.name;

  const similarOffers = [];

  for (let i = 0; i < offers.length; i++) {
    if (similarOffers.length === MAX_SIMILAR_OFFERS) {
      break;
    }

    if (offers[i].city.name === city && offers[i] !== offer) {
      similarOffers.push(offers[i]);
    }
  }

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
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

      <main className="page__main page__main--property">
        <RoomInfo
          id={id}
          offers={similarOffers}
          offer={offer}
        />
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersListRoom offers={similarOffers} />
          </section>
        </div>
      </main>
    </div>
  );
};

RoomScreen.propTypes = {
  id: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export {RoomScreen};
export default connect(mapStateToProps, null)(RoomScreen);
