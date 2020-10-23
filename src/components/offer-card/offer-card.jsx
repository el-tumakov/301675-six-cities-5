import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

const Classes = {
  MAIN: {
    ARTICLE: `cities__place-card place-card`,
    IMAGE: `cities__image-wrapper place-card__image-wrapper`,
    INFO: `place-card__info`,
    RATING_STYLE: {width: `80%`},
  },
  ROOM: {
    ARTICLE: `near-places__card place-card`,
    IMAGE: `near-places__image-wrapper place-card__image-wrapper`,
    INFO: `place-card__info`,
    RATING_STYLE: {width: `80%`},
  },
  FAVORITES: {
    ARTICLE: `favorites__card place-card`,
    IMAGE: `favorites__image-wrapper place-card__image-wrapper`,
    INFO: `favorites__card-info place-card__info`,
    RATING_STYLE: {width: `100%`},
  }
};

const OfferCard = (props) => {
  const {offer, screenType} = props;

  const {
    id,
    photos,
    title,
    premium,
    type,
    rating,
    price,
    favorite
  } = offer;

  const offerLink = `/offer/${id}`;

  return (
    <article
      className={Classes[screenType].ARTICLE}
      onMouseOver={(evt) => {
        evt.preventDefault();
      }}>
      {premium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : ``
      }
      <div className={Classes[screenType].IMAGE}>
        <Link to={offerLink}>
          <img className="place-card__image" src={photos[0]} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className={Classes[screenType].INFO}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={
              `${
                favorite
                  ? `place-card__bookmark-button--active`
                  : ``
              } place-card__bookmark-button button`
            }
            type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={Classes[screenType].RATING_STYLE}>{rating}</span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerLink}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    photos: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    favorite: PropTypes.bool.isRequired,
  }).isRequired,
  screenType: PropTypes.string.isRequired,
};

export default OfferCard;
