import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import RoomInfo from "../room-info/room-info";
import OffersListRoom from "../offers-list-room/offers-list-room";
import Header from "../header/header";
import {fetchNearbyOffers, fetchReviews} from "../../store/api-actions";


const RoomScreen = (props) => {
  const {id, offers, loadReviews, loadNearbyOffers} = props;

  const offer = offers.find((item) => item.id === id);

  useEffect(() => {
    loadReviews(id);
    loadNearbyOffers(id);
  });

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
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadReviews: PropTypes.func.isRequired,
  loadNearbyOffers: PropTypes.func.isRequired
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
  }
});

export {RoomScreen};
export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen);
