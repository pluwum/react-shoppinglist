import _ from "lodash";
import { expect } from "../test_helper";
import { ShoppingListItemsReducer } from "../../src/reducers/items";
import {
  FETCH_LIST_ITEMS_SUCCESS,
  FETCH_LIST_ITEMS_REQUEST
} from "../../src/actions/types";

describe("Items reducer", () => {
  let payload, initialState;
  beforeEach(() => {
    payload = {
      data: [
        {
          date_created: "Fri, 05 Jan 2018 00:19:00 GMT",
          date_modified: "Fri, 05 Jan 2018 00:19:59 GMT",
          description: "dfdwf",
          id: 3,
          name: "Salt",
          shopping_list_id: 2,
          type: "item"
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
    initialState = {
      isFetching: false,
      data: _.mapKeys(payload.data, "id"),
      meta: payload.meta
    };
  });

  it("handles action with unknown type", () => {
    expect(ShoppingListItemsReducer(undefined, {})).to.eql({});
  });
  it("handles action of type FETCH_LIST_ITEMS_REQUEST", () => {
    const action = { type: FETCH_LIST_ITEMS_REQUEST };
    expect(ShoppingListItemsReducer({}, action)).to.eql({
      isFetching: true
    });
  });
  it("handles action of type FETCH_LIST_ITEMS_SUCCESS", () => {
    const action = { type: FETCH_LIST_ITEMS_SUCCESS, payload };
    expect(ShoppingListItemsReducer({}, action)).to.eql({
      isFetching: false,
      data: _.mapKeys(action.payload.data, "id"),
      meta: action.payload.meta
    });
  });
});
