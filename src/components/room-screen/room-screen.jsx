import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import RoomInfo from "../room-info/room-info";
import OffersListRoom from "../offers-list-room/offers-list-room";
import Header from "../header/header";
import {fetchReviews} from "../../store/api-actions";

const MAX_SIMILAR_OFFERS = 3;

const RoomScreen = (props) => {
  const {id, offers, loadReviews} = props;

  const offer = offers.find((item) => item.id === id);
  const similarOffers = [];

  for (let i = 0; i < offers.length; i++) {
    if (similarOffers.length === MAX_SIMILAR_OFFERS) {
      break;
    }

    if (offers[i].city.name === offer.city.name && offers[i] !== offer) {
      similarOffers.push(offers[i]);
    }
  }

  loadReviews(id);

  return (
    <div className="page">
      <Header />

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
  loadReviews: PropTypes.func.isRequired
};

const mapStateToProps = ({DATA}) => ({
  offers: DATA.offers,
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews(offerId) {
    dispatch(fetchReviews(offerId));
  }
});

export {RoomScreen};
export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen);
