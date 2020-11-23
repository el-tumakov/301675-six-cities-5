import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import FavoriteButtonMain from "../favorite-button-main/favorite-button-main";
import {getRatingPercent} from "../../utils";
import {oneOfferProps} from "../../prop-types";


const OfferCard = (props) => {
  const {
    offer,
    onHoverOffer,
    onResetHoveredOffer,
    articleClassName,
    imageClassName,
    infoClassName,
    imageWidth,
    imageHeight
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
  articleClassName: PropTypes.string.isRequired,
  imageClassName: PropTypes.string.isRequired,
  infoClassName: PropTypes.string.isRequired,
  onHoverOffer: PropTypes.func.isRequired,
  onResetHoveredOffer: PropTypes.func.isRequired,
  imageWidth: PropTypes.number.isRequired,
  imageHeight: PropTypes.number.isRequired
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
