import _ from "lodash";
import {
  FETCH_LIST_ITEMS_SUCCESS,
  FETCH_LIST_ITEMS_REQUEST
} from "../actions/types";

export function ShoppingListItemsReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_LIST_ITEMS_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case FETCH_LIST_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: _.mapKeys(action.payload.data, "id"),
        meta: action.payload.meta
      };
    default:
      return state;
  }
}
