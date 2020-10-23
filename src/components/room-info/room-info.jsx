import React from "react";
import PropTypes from "prop-types";
import RoomGallery from "../room-gallery/room-gallery";
import RoomOwner from "../room-owner/room-owner";
import RoomReviewsList from "../room-reviews-list/room-reviews-list";

const RoomInfo = (props) => {
  const {offer, owner, reviews} = props;
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
    description
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
            reviews={reviews}
          />
        </div>
      </div>
      <section className="property__map map"></section>
    </section>
  );
};

RoomInfo.propTypes = {
  offer: PropTypes.shape({
    photos: PropTypes.arrayOf(PropTypes.string).isRequired,
    premium: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    guests: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  owner: PropTypes.object.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default RoomInfo;
