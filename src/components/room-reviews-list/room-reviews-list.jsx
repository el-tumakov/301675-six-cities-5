import React from "react";
import PropTypes from "prop-types";
import RoomReview from "../room-review/room-review";
import RoomComment from "../room-comment/room-comment";

const RoomReviewsList = (props) => {
  const {reviews} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <RoomReview
            key={review.id}
            review={review}
          />
        ))}
      </ul>
      <RoomComment />
    </section>
  );
};

RoomReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default RoomReviewsList;
