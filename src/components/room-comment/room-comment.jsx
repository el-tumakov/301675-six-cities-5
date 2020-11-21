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

const createRatingFragment = (changeHandler, isDisabled, rating) => {
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
            disabled={isDisabled}
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
  const [isDisabled, setDisabled] = useState(false);

  const form = useRef();
  const input = useRef();
  const submitButton = useRef();

  useEffect(() => {
    setComment(``);
    setRating(``);
    setDisabled(false);
  }, [offerId]);

  useEffect(() => {
    if (rating && comment.length >= CommentLength.MIN && !isDisabled) {
      submitButton.current.disabled = false;
    } else {
      submitButton.current.disabled = true;
    }
  }, [rating, comment, isDisabled]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setDisabled(true);

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
    setDisabled(false);
  };

  const handleError = () => {
    form.current.style.border = `1px solid red`;

    setDisabled(false);
  };

  return (
    <form
      className="reviews__form form"
      onSubmit={handleSubmit}
      ref={form}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {createRatingFragment((evt) => {
          setRating(evt.target.value);
        }, isDisabled, rating)}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={(evt) => {
          evt.preventDefault();

          setComment(evt.target.value);
        }}
        ref={input}
        maxLength={CommentLength.MAX}
        disabled={isDisabled}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
          ref={submitButton}
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
