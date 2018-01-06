import {
  FETCH_LIST_ITEMS_SUCCESS,
  DELETE_LIST_ITEM_SUCCESS,
  FETCH_LIST_ITEMS_REQUEST
} from "../actions/index";
import _ from "lodash";

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

    case DELETE_LIST_ITEM_SUCCESS:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
