import {ActionType} from "../../action";
import {extend} from "../../../utils";

const initialState = {
  city: `Paris`,
  sort: `popular`,
  hoveredOffer: ``
};

const appProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
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

export {appProcess};
