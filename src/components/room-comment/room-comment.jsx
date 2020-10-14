import React, {PureComponent} from "react";

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
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value="5"
            id="5-stars"
            type="radio"
            onChange={this.handleRatingChange}
          />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value="4"
            id="4-stars"
            type="radio"
            onChange={this.handleRatingChange}
          />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value="3"
            id="3-stars"
            type="radio"
            onChange={this.handleRatingChange}
          />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value="2"
            id="2-stars"
            type="radio"
            onChange={this.handleRatingChange}
          />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value="1"
            id="1-star"
            type="radio"
            onChange={this.handleRatingChange}
          />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
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
