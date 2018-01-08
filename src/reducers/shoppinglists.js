import _ from "lodash";
import { FETCH_LISTS_SUCCESS, FETCH_LISTS_REQUEST } from "../actions/types";

export function ShoppingListsReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_LISTS_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case FETCH_LISTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: action.error,
        data: _.mapKeys(action.payload.data, "id"),
        meta: action.payload.meta,
        success: true
      };
    default:
      return state;
  }
}
