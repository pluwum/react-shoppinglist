import { expect } from "../test_helper";
import {
  FETCH_LISTS_REQUEST,
  FETCH_LISTS_SUCCESS,
  FETCH_LIST_ITEMS_SUCCESS,
  FETCH_LIST_ITEMS_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_REQUEST
} from "../../src/actions/types";
import {
  fetchLists,
  fetchListItems,
  loginUser,
  logoutUser,
  changePassword
} from "../../src/actions/index";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Test Actions", () => {
  let action;
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe("FetchLists", () => {
    it("Has correct type", () => {
      const store = mockStore({
        myData: ""
      });

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {}
        });
      });

      const expected = [
        { type: FETCH_LISTS_REQUEST },
        { type: FETCH_LISTS_SUCCESS, payload: {} }
      ];

      return store.dispatch(fetchLists()).then(() => {
        //expect(store.getActions()).to.eql(expected);
      });
    });
  });

  describe("FetchListItems", () => {
    it("Has correct type", () => {
      const store = mockStore({
        myData: ""
      });

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {}
        });
      });

      const expected = [
        { type: FETCH_LIST_ITEMS_REQUEST },
        { type: FETCH_LIST_ITEMS_SUCCESS, payload: {} }
      ];

      return store.dispatch(fetchListItems(1)).then(() => {
        expect(store.getActions()).to.eql(expected);
      });
    });
  });

  describe("LoginUser", () => {
    it("Has correct type", () => {
      const store = mockStore({
        myData: ""
      });

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {}
        });
      });

      const expected = [
        { type: LOGIN_USER_REQUEST },
        { type: LOGIN_USER_SUCCESS }
      ];

      return store.dispatch(loginUser([], () => {})).then(() => {
        expect(store.getActions()).to.eql(expected);
      });
    });
  });

  describe("LogoutUser", () => {
    it("Has correct type", () => {
      const store = mockStore({
        myData: ""
      });

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {}
        });
      });

      const expected = [
        { type: LOGOUT_USER_REQUEST },
        { type: LOGOUT_USER_SUCCESS }
      ];

      return store.dispatch(logoutUser()).then(() => {
        expect(store.getActions()).to.eql(expected);
      });
    });
  });
});
