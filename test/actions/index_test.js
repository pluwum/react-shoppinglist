import { expect } from "../test_helper";
import { FETCH_LISTS_REQUEST } from "../../src/actions/types";
import { fetchLists } from "../../src/actions/index";

describe("Test Actions", () => {
  let action;
  beforeEach(() => {
    action = fetchLists();
  });

  describe("RequestLists", () => {
    // it("Has correct type", () => {
    //   expect(action.type).to.equal(FETCH_LISTS_REQUEST);
    // });
    // it("Has correct payload", () => {});
  });
});
