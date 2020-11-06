import {ActionType} from "../../action";
import {extend, adaptToClient} from "../../../utils";

const initialState = {
  offers: [],
  userData: {}
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: adaptToClient(action.payload)
      });

    case ActionType.LOAD_USER_DATA:
      return extend(state, {
        userData: action.payload
      });
  }

  return state;
};

export {appData};
