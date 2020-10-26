import offers from "../mocks/offers";
import {ActionType} from "./action";
import {extend} from "../utils";

const getOffersByCity = (city) => (
  offers.filter((offer) => {
    return offer.city === city;
  })
);

const initialState = {
  city: `Amsterdam`,
  cityOffers: getOffersByCity(`Amsterdam`, offers),
  sort: `popular`,
  hoveredOffer: ``
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });

    case ActionType.GET_CITY_OFFERS:
      return extend(state, {
        cityOffers: getOffersByCity(state.city)
      });

    case ActionType.CHANGE_SORT:
      return extend(state, {
        sort: action.payload
      });

    case ActionType.CHANGE_HOVERED_OFFER:
      return extend(state, {
        hoveredOffer: action.payload
      });

    case ActionType.RESET_HOVERED_OFFER:
      return extend(state, {
        hoveredOffer: ``
      });
  }

  return state;
};

export {reducer};
