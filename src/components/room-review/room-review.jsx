import React from "react";
import {getRatingPercent} from "../../utils";
import {reviewProps} from "../../prop-types";


const RoomReview = (props) => {
  const {review} = props;
  const {
    user,
    rating,
    date,
    comment
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
          <img className="reviews__avatar user__avatar" src={user.avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${getRatingPercent(rating)}%`}}>{rating}</span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{getStringDate(date)}</time>
      </div>
    </li>
  );
};

RoomReview.propTypes = {
  review: reviewProps
};

export default RoomReview;
