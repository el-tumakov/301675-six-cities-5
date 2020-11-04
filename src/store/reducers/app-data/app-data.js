import {ActionType} from "../../action";
import {extend, adaptOffersToClient, adaptReviewsToClient} from "../../../utils";

const initialState = {
  offers: [],
  userData: {},
  reviews: []
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: adaptOffersToClient(action.payload)
      });

    case ActionType.LOAD_USER_DATA:
      return extend(state, {
        userData: action.payload
      });

    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: adaptReviewsToClient(action.payload)
      });

    case ActionType.UPDATE_FAVORITE:
      const currentOffer = state.offers.find((offer) => (
        offer.id === action.payload.id
      ));

      currentOffer.favorite = action.payload.is_favorite;
  }

  return state;
};

export {appData};
