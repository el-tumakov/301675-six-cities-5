import React, {useState, useEffect, useRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {uploadComment} from "../../store/api-actions";

const CommentLength = {
  MIN: 50,
  MAX: 300
};
const MAX_RATING = 5;
const TITLES = [
  `terribly`,
  `badly`,
  `not bad`,
  `good`,
  `perfect`
];

const createRatingFragment = (changeHandler, isInputDisabled, rating) => {
  const ratingInputs = [];

  for (let i = MAX_RATING; i > 0; i--) {
    ratingInputs.push(
        <React.Fragment key={i}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={i}
            id={`${i}-stars`}
            type="radio"
            onChange={changeHandler}
            disabled={isInputDisabled}
            checked={+rating === i ? `checked` : ``}
          />
          <label htmlFor={`${i}-stars`} className="reviews__rating-label form__rating-label" title={TITLES[i - 1]}>
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </React.Fragment>
    );
  }

  return ratingInputs;
};

const RoomComment = (props) => {
  const {onSubmit, offerId} = props;

  const [comment, setComment] = useState(``);
  const [rating, setRating] = useState(``);
  const [isInputDisabled, setInputDisabled] = useState(false);
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);

  const form = useRef();

  useEffect(() => {
    setComment(``);
    setRating(``);
    setInputDisabled(false);
    setSubmitDisabled(true);
  }, [offerId]);

  useEffect(() => {
    if (rating && comment.length >= CommentLength.MIN) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [rating, comment]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setInputDisabled(true);
    setSubmitDisabled(true);

    onSubmit(
        {
          comment,
          rating
        },
        offerId,
        handleLoad,
        handleError
    );
  };

  const handleLoad = () => {
    form.current.reset();
    form.current.style.border = null;

    setComment(``);
    setRating(``);
    setInputDisabled(false);
    setSubmitDisabled(true);
  };

  const handleError = () => {
    form.current.style.border = `1px solid red`;

    setInputDisabled(false);
    setSubmitDisabled(false);
  };

  const handleCommentChange = (evt) => {
    evt.preventDefault();

    setComment(evt.target.value);
  };

  const handleRatingChange = (evt) => {
    setRating(evt.target.value);
  };

  return (
    <form
      className="reviews__form form"
      onSubmit={handleSubmit}
      ref={form}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {createRatingFragment(handleRatingChange, isInputDisabled, rating)}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={handleCommentChange}
        maxLength={CommentLength.MAX}
        disabled={isInputDisabled}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

RoomComment.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  offerId: PropTypes.number.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(commentData, offerId, loadingHandler, errorHandler) {
    Promise.all([
      dispatch(uploadComment(commentData, offerId))
    ])
    .then(() => (loadingHandler()))
    .catch(() => (errorHandler()));
  }
});

export {RoomComment};
export default connect(null, mapDispatchToProps)(RoomComment);
