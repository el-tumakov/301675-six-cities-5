import React, {PureComponent, createRef} from "react";
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

const createRatingFragment = (changeHandler, state) => {
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
            disabled={state.isDisabled}
          />
          <label htmlFor={`${i}-stars`} className="reviews__rating-label form__rating-label" title={TITLES[i - 1]}>
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </React.Fragment>
    );
  }

  return ratingInputs;
};

class RoomComment extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      comment: ``,
      rating: ``,
      isDisabled: false
    };

    this.form = createRef();
    this.input = createRef();
    this.submitButton = createRef();

    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleCommentChange(evt) {
    evt.preventDefault();

    this.setState({
      comment: evt.target.value
    });
  }

  handleRatingChange(evt) {
    this.setState({
      rating: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const {onSubmit, offerId} = this.props;

    this.disableForm();

    onSubmit(
        {
          comment: this.state.comment,
          rating: this.state.rating
        },
        offerId,
        this.handleLoad,
        this.handleError
    );
  }

  handleLoad() {
    this.form.current.reset();
    this.form.current.style.border = null;

    this.setState({
      comment: ``,
      rating: ``,
      isDisabled: false
    });
  }

  handleError() {
    this.form.current.style.border = `1px solid red`;

    this.setState({
      isDisabled: false
    });
  }

  disableForm() {
    this.submitButton.current.disabled = true;

    this.setState({
      isDisabled: true
    });
  }

  render() {
    return (
      <form
        className="reviews__form form"
        onSubmit={this.handleSubmit}
        ref={this.form}
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {createRatingFragment(this.handleRatingChange, this.state)}
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          value={this.state.comment}
          onChange={this.handleCommentChange}
          ref={this.input}
          maxLength={CommentLength.MAX}
          disabled={this.state.isDisabled}
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
            ref={this.submitButton}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }

  componentDidUpdate() {
    if (this.state.rating
      && this.state.comment.length >= CommentLength.MIN
      && !this.state.isDisabled
    ) {
      this.submitButton.current.disabled = false;
    }
  }
}

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
