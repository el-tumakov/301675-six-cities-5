import {user} from "./user";
import {ActionType} from "../../action";
import {AuthorizationStatus} from "../../../const";


describe(`User reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(user(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    });
  });

  it(`Reducer should change authorization status`, () => {
    expect(user({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });
  });
});
