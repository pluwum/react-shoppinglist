import { LOGIN_USER_SUCCESS, LOGOUT_USER_SUCCESS } from "../actions/types";

export function AuthReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        isLoggedIn: true
      };

    case LOGOUT_USER_SUCCESS:
      return {
        isLoggedIn: false
      };

    default:
      return state;
  }
}
