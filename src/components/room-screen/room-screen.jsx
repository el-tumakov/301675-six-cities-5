import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import RoomInfo from "../room-info/room-info";
import OffersListRoom from "../offers-list-room/offers-list-room";
import Header from "../header/header";
import {fetchNearbyOffers, fetchReviews} from "../../store/api-actions";
import {ActionCreator} from "../../store/action";
import {offersProps} from "../../prop-types";

const RoomScreen = (props) => {
  const {id, offers, loadReviews, loadNearbyOffers, resetHoveredOffer} = props;

  const offer = offers.find((item) => item.id === id);

  useEffect(() => {
    loadReviews(id);
    loadNearbyOffers(id);
    resetHoveredOffer();
  }, [id]);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <RoomInfo
          id={id}
          offer={offer}
        />
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersListRoom />
          </section>
        </div>
      </main>
    </div>
  );
};

RoomScreen.propTypes = {
  id: PropTypes.number.isRequired,
  offers: offersProps,
  loadReviews: PropTypes.func.isRequired,
  loadNearbyOffers: PropTypes.func.isRequired,
  resetHoveredOffer: PropTypes.func.isRequired
};

const mapStateToProps = ({DATA}) => ({
  offers: DATA.offers,
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews(offerId) {
    dispatch(fetchReviews(offerId));
  },
  loadNearbyOffers(offerId) {
    dispatch(fetchNearbyOffers(offerId));
  },
  resetHoveredOffer() {
    dispatch(ActionCreator.resetHoveredOffer());
  }
});

export {RoomScreen};
export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen);
