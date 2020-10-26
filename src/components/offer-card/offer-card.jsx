import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const OfferCard = (props) => {
  const {
    offer,
    articleClassName,
    imageClassName,
    infoClassName,
    ratingStyle,
    onHoverOffer,
    resetHoveredOffer
  } = props;

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
      className={`${articleClassName} place-card`}
      onMouseEnter={(evt) => {
        evt.preventDefault();
        onHoverOffer(offer);
      }}
      onMouseLeave={(evt) => {
        evt.preventDefault();
        resetHoveredOffer();
      }}
    >
      {premium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : ``
      }
      <div className={`${imageClassName} place-card__image-wrapper`}>
        <Link to={offerLink}>
          <img className="place-card__image" src={photos[0]} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className={`${infoClassName} place-card__info`}>
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
            <span style={ratingStyle}>{rating}</span>
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
  articleClassName: PropTypes.string.isRequired,
  imageClassName: PropTypes.string.isRequired,
  infoClassName: PropTypes.string.isRequired,
  ratingStyle: PropTypes.object.isRequired,
  onHoverOffer: PropTypes.func.isRequired,
  resetHoveredOffer: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onHoverOffer(offer) {
    dispatch(ActionCreator.changeHoveredOffer(offer));
  },
  resetHoveredOffer() {
    dispatch(ActionCreator.resetHoveredOffer());
  }
});


export {OfferCard};
export default connect(``, mapDispatchToProps)(OfferCard);
