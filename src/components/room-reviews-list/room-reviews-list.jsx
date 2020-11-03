import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import RoomReview from "../room-review/room-review";
import RoomComment from "../room-comment/room-comment";
import {AuthorizationStatus} from "../../const";

const RoomReviewsList = (props) => {
  const {reviews, authorizationStatus, offerId} = props;

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
      {authorizationStatus === AuthorizationStatus.AUTH
        ? <RoomComment offerId={offerId}/>
        : ``
      }
    </section>
  );
};

RoomReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  offerId: PropTypes.number.isRequired
};

const mapStateToProps = ({DATA, USER}) => ({
  reviews: DATA.reviews,
  authorizationStatus: USER.authorizationStatus
});

export {RoomReviewsList};
export default connect(mapStateToProps, null)(RoomReviewsList);
