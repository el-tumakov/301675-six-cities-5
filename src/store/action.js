export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_CITY_OFFERS: `GET_OFFERS`,
  CHANGE_SORT: `CHANGE_SORT`,
  CHANGE_HOVERED_OFFER: `CHANGE_HOVERED_OFFER`,
  RESET_HOVERED_OFFER: `RESET_HOVERED_OFFER`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  getCityOffer: () => ({
    type: ActionType.GET_CITY_OFFERS
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
  })
};
