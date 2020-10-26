export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_CITY_OFFERS: `GET_OFFERS`,
  CHANGE_SORT: `CHANGE_SORT`
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
  })
};
