export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_SORT: `CHANGE_SORT`,
  CHANGE_HOVERED_OFFER: `CHANGE_HOVERED_OFFER`,
  RESET_HOVERED_OFFER: `RESET_HOVERED_OFFER`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
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
  })
};
