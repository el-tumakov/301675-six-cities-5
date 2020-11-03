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

const createRatingFragment = (changeHandler) => {
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
    };

    this.form = createRef();
    this.input = createRef();

    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCommentChange(evt) {
    evt.preventDefault();

    this.input.current.setCustomValidity(``);

    this.setState({
      comment: evt.target.value
    });
  }

  handleRatingChange(evt) {
    this.input.current.setCustomValidity(``);

    this.setState({
      rating: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const {onSubmit, offerId} = this.props;

    if (this.checkValidity()) {
      onSubmit({
        comment: this.state.comment,
        rating: this.state.rating
      }, offerId);

      this.resetForm();
    }
  }

  resetForm() {
    this.form.current.reset();
    this.setState({
      comment: ``,
      rating: ``
    });
  }

  checkValidity() {
    if (this.state.comment.length < CommentLength.MIN) {
      this.input.current.setCustomValidity(`Describe your stay with at least 50 characters.`);

      return false;
    }

    if (!this.state.rating) {
      this.input.current.setCustomValidity(`Set ratig.`);

      return false;
    }

    return true;
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
        >
        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
        </div>
      </form>
    );
  }
}

RoomComment.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  offerId: PropTypes.number.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(commentData, offerId) {
    dispatch(uploadComment(commentData, offerId));
  }
});

export {RoomComment};
export default connect(null, mapDispatchToProps)(RoomComment);
