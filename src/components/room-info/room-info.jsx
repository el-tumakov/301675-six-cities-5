import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import RoomGallery from "../room-gallery/room-gallery";
import RoomOwner from "../room-owner/room-owner";
import RoomReviewsList from "../room-reviews-list/room-reviews-list";
import Map from "../map/map";

const RoomInfo = (props) => {
  const {
    id,
    offers,
    owners,
    reviews,
    offer,
    hoveredOffer
  } = props;

  const owner = owners.find((item) => item.id === offer.ownerId);
  const offerReviews = reviews.filter((item) => item.offerId === id);

  const {
    photos,
    premium,
    title,
    rating,
    type,
    bedrooms,
    guests,
    price,
    features,
    description,
    city
  } = offer;

  return (
    <section className="property">
      <RoomGallery photos={photos} />
      <div className="property__container container">
        <div className="property__wrapper">
          {premium ?
            <div className="property__mark">
              <span>Premium</span>
            </div>
            : ``
          }
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {title}
            </h1>
            <button className="property__bookmark-button button" type="button">
              <svg className="property__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{width: `80%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {bedrooms} Bedrooms
            </li>
            <li className="property__feature property__feature--adults">
              Max {guests} adults
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {features.length ?
                features.map((feature) => (
                  <li key={feature} className="property__inside-item">
                    {feature}
                  </li>
                ))
                : ``
              }
            </ul>
          </div>
          <RoomOwner
            description={description}
            owner={owner}
          />
          <RoomReviewsList
            reviews={offerReviews}
          />
        </div>
      </div>
      <section className="property__map map">
        <Map
          city={city}
          offers={offers}
          hoveredOffer={hoveredOffer}
        />
      </section>
    </section>
  );
};

RoomInfo.propTypes = {
  id: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  owners: PropTypes.arrayOf(PropTypes.object).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  offer: PropTypes.object.isRequired,
  hoveredOffer: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};


const mapStateToProps = (state) => ({
  hoveredOffer: state.hoveredOffer
});

export {RoomInfo};
export default connect(mapStateToProps)(RoomInfo);
