import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import RoomInfo from "../room-info/room-info";
import OfferCardRoom from "../offer-card-room/offer-card-room";
import withMap from "../../hocs/with-map/with-map";

const MAX_SIMILAR_OFFERS = 3;

const RoomInfoWrapped = withMap(RoomInfo);

const RoomScreen = (props) => {
  const {id, offers, owners, reviews} = props;

  const similarOffers = [];

  for (let i = 0; i < offers.length; i++) {
    if (i === MAX_SIMILAR_OFFERS) {
      break;
    }

    similarOffers.push(offers[i]);
  }

  const similarCoordinates = similarOffers.map((offer) => offer.coordinates);

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
        <RoomInfoWrapped
          id={id}
          offers={offers}
          owners={owners}
          reviews={reviews}
          similarCoordinates={similarCoordinates}
        />
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {similarOffers.map((offer) => (
                <OfferCardRoom
                  key={offer.id}
                  offer={offer}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

RoomScreen.propTypes = {
  id: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  owners: PropTypes.arrayOf(PropTypes.object).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RoomScreen;
