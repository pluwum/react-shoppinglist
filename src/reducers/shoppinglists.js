import _ from "lodash";
import {
  DELETE_LIST_SUCCESS,
  EDIT_LIST_SUCCESS,
  FETCH_LISTS_SUCCESS,
  FETCH_LISTS_REQUEST,
  FETCH_LISTS_FAILURE,
  CREATE_LIST_FAILURE
} from "../actions/types";

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

    case CREATE_LIST_FAILURE:
      return {
        ...state,
        success: false,
        message: action.payload
      };

    case EDIT_LIST_SUCCESS:
      return {
        ...state,
        isFetching: true,
        error: action.error,
        message: "action.payload"
      };

    case DELETE_LIST_SUCCESS:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
