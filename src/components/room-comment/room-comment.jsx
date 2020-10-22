import React, {PureComponent} from "react";

const MAX_RATING = 5;

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
          <label htmlFor={`${i}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
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
      rating: ``
    };

    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCommentChange(evt) {
    evt.preventDefault();
    this.setState({
      comment: evt.target.value
    });
  }

  handleRatingChange(evt) {
    evt.preventDefault();
    this.setState({
      rating: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  render() {
    return (
      <form
        className="reviews__form form"
        onSubmit={this.handleSubmit}
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {createRatingFragment(this.handleRatingChange)}
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          value={this.state.comment}
          onChange={this.handleCommentChange}
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

export default RoomComment;
