import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import RoomReview from "../room-review/room-review";
import RoomComment from "../room-comment/room-comment";
import {sortReviews} from "../../sort";
import {AuthorizationStatus} from "../../const";
import {reviewProps} from "../../prop-types";


const MAX_REVIEWS = 10;

const RoomReviewsList = (props) => {
  const {reviews, authorizationStatus, offerId} = props;

  const sortedReviews = sortReviews(reviews);
  const filteredReviews = [];

  for (let i = 0; i < sortedReviews.length; i++) {
    if (i === MAX_REVIEWS) {
      break;
    }

    filteredReviews.push(sortedReviews[i]);
  }

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {filteredReviews.map((review) => (
          <RoomReview
            key={review.id}
            review={review}
          />
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.AUTH
        ? <RoomComment offerId={offerId}/>
        : ``
      }
    </section>
  );
};

RoomReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewProps).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  offerId: PropTypes.number.isRequired
};

const mapStateToProps = ({DATA, USER}) => ({
  reviews: DATA.reviews,
  authorizationStatus: USER.authorizationStatus
});

export {RoomReviewsList};
export default connect(mapStateToProps)(RoomReviewsList);
