import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import FavoriteButtonMain from "../favorite-button-main/favorite-button-main";
import {getRatingPercent} from "../../utils";
import {oneOfferProps} from "../../prop-types";
import {ScreenTypes, CardImageSizes} from "../../const";


const OfferCard = (props) => {
  const {
    offer,
    onHoverOffer,
    onResetHoveredOffer,
    screenType
  } = props;

  const {
    id,
    title,
    premium,
    type,
    rating,
    price,
    favorite,
    preview
  } = offer;

  const offerLink = `/offer/${id}`;

  const handleMouseEnter = (evt) => {
    evt.preventDefault();

    onHoverOffer(offer);
  };

  const handleMouseLeave = (evt) => {
    evt.preventDefault();

    onResetHoveredOffer();
  };

  let articleClassName = ``;
  let imageClassName = ``;
  let infoClassName = ``;
  let imageWidth = ``;
  let imageHeight = ``;

  switch (screenType) {
    case ScreenTypes.MAIN:
      articleClassName = `cities__place-card`;
      imageClassName = `cities__image-wrapper`;
      infoClassName = ``;
      imageWidth = CardImageSizes.MAIN_WIDTH;
      imageHeight = CardImageSizes.MAIN_HEIGHT;

      break;
    case ScreenTypes.ROOM:
      articleClassName = `near-places__card`;
      imageClassName = `near-places__image-wrapper`;
      infoClassName = ``;
      imageWidth = CardImageSizes.MAIN_WIDTH;
      imageHeight = CardImageSizes.MAIN_HEIGHT;

      break;
    case ScreenTypes.FAVORITE:
      articleClassName = `favorites__card`;
      imageClassName = `favorites__image-wrapper`;
      infoClassName = `favorites__card-info`;
      imageWidth = CardImageSizes.FAVORITE_WIDTH;
      imageHeight = CardImageSizes.FAVORITE_HEIGHT;

      break;
  }

  return (
    <article
      className={`${articleClassName} place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {premium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : ``
      }
      <div className={`${imageClassName} place-card__image-wrapper`}>
        <Link to={offerLink}>
          <img className="place-card__image" src={preview} width={imageWidth} height={imageHeight} alt="Place image" />
        </Link>
      </div>
      <div className={`${infoClassName} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButtonMain id={id} favorite={favorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingPercent(rating)}%`}}>{rating}</span>
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
  offer: oneOfferProps,
  onHoverOffer: PropTypes.func.isRequired,
  onResetHoveredOffer: PropTypes.func.isRequired,
  screenType: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onHoverOffer(offer) {
    dispatch(ActionCreator.changeHoveredOffer(offer));
  },
  onResetHoveredOffer() {
    dispatch(ActionCreator.resetHoveredOffer());
  }
});


export {OfferCard};
export default connect(null, mapDispatchToProps)(OfferCard);
