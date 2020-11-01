import {ActionType} from "./action";
import {extend, adaptToClient} from "../utils";

const initialState = {
  city: `Paris`,
  offers: [],
  sort: `popular`,
  hoveredOffer: ``
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });

    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: adaptToClient(action.payload)
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

    case ActionType.RESET_STATE:
      return extend(state, initialState);
  }

  return state;
};

export {reducer};
