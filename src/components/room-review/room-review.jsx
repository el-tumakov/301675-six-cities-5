import React from "react";
import PropTypes from "prop-types";

const RoomReview = (props) => {
  const {review} = props;
  const {
    avatar,
    name,
    rating,
    date,
    description
  } = review;

  const getStringDate = (isoDate) => {
    return new Date(isoDate).toLocaleTimeString(`en-US`, {
      month: `long`,
      day: `numeric`
    });
  };

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `80%`}}>{rating}</span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {description}
        </p>
        <time className="reviews__time" dateTime={date}>{getStringDate(date)}</time>
      </div>
    </li>
  );
};

RoomReview.propTypes = {
  review: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default RoomReview;
