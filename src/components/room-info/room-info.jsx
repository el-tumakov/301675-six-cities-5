import React from "react";
import PropTypes from "prop-types";
import RoomGallery from "../room-gallery/room-gallery";
import RoomOwner from "../room-owner/room-owner";
import RoomReviewsList from "../room-reviews-list/room-reviews-list";

const MAX_SIMILAR_OFFERS = 3;

const RoomInfo = (props) => {
  const {id, offers, owners, reviews, renderMap} = props;

  const offer = offers.find((item) => item.id === id);
  const owner = owners.find((item) => item.id === offer.ownerId);
  const offerReviews = reviews.filter((item) => item.offerId === id);

  const getCoordinates = () => {
    const coordinates = [];

    for (let i = 0; i < offers.length; i++) {
      if (i === MAX_SIMILAR_OFFERS) {
        break;
      }

      coordinates.push(offers[i].coordinates);
    }

    return coordinates;
  };

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
            reviews={offerReviews}
          />
        </div>
      </div>
      <section className="property__map map">
        {renderMap(getCoordinates())}
      </section>
    </section>
  );
};

RoomInfo.propTypes = {
  id: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  owners: PropTypes.arrayOf(PropTypes.object).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderMap: PropTypes.func.isRequired,
};

export default RoomInfo;
