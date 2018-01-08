import { expect } from "../test_helper";
import { AuthReducer } from "../../src/reducers/auth";
import {
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS
} from "../../src/actions/types";

describe("Auth reducer", () => {
  it("handles action with unknown type", () => {
    expect(AuthReducer(undefined, {})).to.eql({});
  });
  it("handles action of type LOGIN_USER_SUCCESS", () => {
    const action = { type: LOGIN_USER_SUCCESS };
    expect(AuthReducer({}, action)).to.eql({
      isLoggedIn: true
    });
  });
  it("handles action of type LOGOUT_USER_SUCCESS", () => {
    const action = { type: LOGOUT_USER_SUCCESS };
    expect(AuthReducer({}, action)).to.eql({
      isLoggedIn: false
    });
  });
});
