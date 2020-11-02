import {ActionType} from "../../action";
import {extend, adaptToClient} from "../../../utils";

const initialState = {
  offers: [],
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: adaptToClient(action.payload)
      });
  }

  return state;
};

export {appData};