import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import RoomInfo from "../room-info/room-info";
import OffersList from "../offers-list/offers-list";
import Header from "../header/header";
import {fetchNearbyOffers, fetchReviews} from "../../store/api-actions";
import {ActionCreator} from "../../store/action";
import {offersProps} from "../../prop-types";
import {ScreenTypes} from "../../const";


const RoomScreen = (props) => {
  const {
    id,
    offers,
    nearbyOffers,
    onLoadReviews,
    onLoadNearbyOffers,
    onResetHoveredOffer
  } = props;

  const offer = offers.find((item) => item.id === id);

  useEffect(() => {
    onLoadReviews(id);
    onLoadNearbyOffers(id);
    onResetHoveredOffer();
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
            <OffersList
              offers={nearbyOffers}
              screenType={ScreenTypes.ROOM}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

RoomScreen.propTypes = {
  id: PropTypes.number.isRequired,
  offers: offersProps,
  nearbyOffers: offersProps,
  onLoadReviews: PropTypes.func.isRequired,
  onLoadNearbyOffers: PropTypes.func.isRequired,
  onResetHoveredOffer: PropTypes.func.isRequired
};

const mapStateToProps = ({DATA}) => ({
  offers: DATA.offers,
  nearbyOffers: DATA.nearbyOffers
});

const mapDispatchToProps = (dispatch) => ({
  onLoadReviews(offerId) {
    dispatch(fetchReviews(offerId));
  },
  onLoadNearbyOffers(offerId) {
    dispatch(fetchNearbyOffers(offerId));
  },
  onResetHoveredOffer() {
    dispatch(ActionCreator.resetHoveredOffer());
  }
});

export {RoomScreen};
export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen);
