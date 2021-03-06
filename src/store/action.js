export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_SORT: `CHANGE_SORT`,
  CHANGE_HOVERED_OFFER: `CHANGE_HOVERED_OFFER`,
  RESET_HOVERED_OFFER: `RESET_HOVERED_OFFER`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_USER_DATA: `LOAD_USER_DATA`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_FAVORITE_OFFERS: `LOAD_FAVORITE_OFFERS`,
  UPDATE_FAVORITE: `UPDATE_FAVORITE`,
  LOAD_NEARBY_OFFERS: `LOAD_NEARBY_OFFERS`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  changeSort: (sort) => ({
    type: ActionType.CHANGE_SORT,
    payload: sort
  }),
  changeHoveredOffer: (offer) => ({
    type: ActionType.CHANGE_HOVERED_OFFER,
    payload: offer
  }),
  resetHoveredOffer: () => ({
    type: ActionType.RESET_HOVERED_OFFER
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  loadUserData: (userData) => ({
    type: ActionType.LOAD_USER_DATA,
    payload: userData
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews
  }),
  loadFavoriteOffers: (offers) => ({
    type: ActionType.LOAD_FAVORITE_OFFERS,
    payload: offers
  }),
  updateFavorite: (offer) => ({
    type: ActionType.UPDATE_FAVORITE,
    payload: offer
  }),
  loadNearbyOffers: (offers) => ({
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: offers
  })
};
