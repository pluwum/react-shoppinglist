import _ from "lodash";
import { expect } from "../test_helper";
import { ShoppingListsReducer } from "../../src/reducers/shoppinglists";
import {
  FETCH_LISTS_SUCCESS,
  FETCH_LISTS_REQUEST
} from "../../src/actions/types";

describe("Items reducer", () => {
  it("handles action with unknown type", () => {
    expect(ShoppingListsReducer(undefined, {})).to.eql({});
  });
  it("handles action of type FETCH_LISTS_REQUEST", () => {
    const action = { type: FETCH_LISTS_REQUEST };
    expect(ShoppingListsReducer({}, action)).to.eql({
      isFetching: true
    });
  });
  it("handles action of type FETCH_LISTS_SUCCESS", () => {
    let payload = {
      data: [
        {
          date_created: "Fri, 05 Jan 2018 17:57:38 GMT",
          date_modified: "Fri, 05 Jan 2018 17:57:38 GMT",
          description: "wmro2kmr",
          id: 14,
          name: "wdkjrel;el2k",
          user_id: 5
        }
      ],
      meta: {
        has_next: false,
        has_prev: false,
        next_num: null,
        page: 1,
        pages: 1,
        per_page: 10,
        prev_num: null,
        total: 1
      }
    };

    const action = { type: FETCH_LISTS_SUCCESS, payload };
    expect(ShoppingListsReducer({}, action)).to.eql({
      isFetching: false,
      error: action.error,
      data: _.mapKeys(action.payload.data, "id"),
      meta: action.payload.meta,
      success: true
    });
  });
});
