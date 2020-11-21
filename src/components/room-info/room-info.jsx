import React from "react";
import PropTypes from "prop-types";
import RoomGallery from "../room-gallery/room-gallery";
import RoomOwner from "../room-owner/room-owner";
import RoomReviewsList from "../room-reviews-list/room-reviews-list";
import MapRoom from "../map-room/map-room";
import FavoriteButton from "../favorite-button/favorite-button";
import {getRatingPercent} from "../../utils";
import {oneOfferProps} from "../../prop-types";
import {ScreenTypes} from "../../const";


const RoomInfo = (props) => {
  const {
    id,
    offer,
  } = props;

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
    owner,
    favorite
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
            <FavoriteButton
              id={id}
              favorite={favorite}
              screenType={ScreenTypes.ROOM}
            />
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{width: `${getRatingPercent(rating)}%`}}></span>
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
            offerId={id}
          />
        </div>
      </div>
      <section className="property__map map">
        <MapRoom
          currentOffer={offer}
        />
      </section>
    </section>
  );
};

RoomInfo.propTypes = {
  id: PropTypes.number.isRequired,
  offer: oneOfferProps,
};

export default RoomInfo;
