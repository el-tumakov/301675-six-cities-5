const MaxRating = {
  PERCENT: 100,
  NUMBER: 5
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const adaptOffersToClient = (offers) => (
  offers.map((offer) => ({
    bedrooms: offer.bedrooms,
    city: offer.city,
    description: offer.description,
    favorite: offer.is_favorite,
    features: offer.goods,
    guests: offer.max_adults,
    id: offer.id,
    location: offer.location,
    owner: {
      id: offer.host.id,
      avatar: offer.host.avatar_url,
      name: offer.host.name,
      super: offer.host.is_pro
    },
    photos: offer.images,
    premium: offer.is_premium,
    preview: offer.preview_image,
    price: offer.price,
    rating: offer.rating,
    title: offer.title,
    type: offer.type
  }))
);

export const adaptReviewsToClient = (reviews) => (
  reviews.map((review) => ({
    comment: review.comment,
    date: review.date,
    id: review.id,
    rating: review.rating,
    user: {
      avatar: review.user.avatar_url,
      id: review.user.id,
      isPro: review.user.is_pro,
      name: review.user.name
    }
  }))
);

export const getRatingPercent = (rating) => (
  Math.round(rating) * MaxRating.PERCENT / MaxRating.NUMBER
);

export const noop = () => {};
