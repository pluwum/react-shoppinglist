import axios from "axios";
import { toastError, toastSuccess } from "../helpers/notifications";
import { ROOT_URL, AXIOS_CONFIG } from "../configs/axios";
import * as types from "./types";

// Prepare pagination parameters
function paginationParams(page, limit) {
  var pagination = "";
  // Check if we have pagination params
  if (typeof page !== "undefined" && typeof limit !== "undefined") {
    pagination = `?limit=${limit}&page=${page}`;
  }
  return pagination;
}

// separate network errors from API errors
function getErrorMessage(error) {
  let message = "An undefined error occured";

  if (typeof error.response != "undefined") {
    message = error.response.data.message;
  } else {
    message = error.message;
  }
  return message;
}

// when we want to start fetching our lists
function requestLists() {
  return {
    type: types.FETCH_LISTS_REQUEST
  };
}

// When we get our requested lists
function receiveLists(data) {
  return {
    type: types.FETCH_LISTS_SUCCESS,
    payload: data
  };
}

// Lets get all shopping lists here
export function fetchLists(page = 1, limit = 4) {
  var pagination = paginationParams(page, limit);

  const url = `${ROOT_URL}/shoppinglists/${pagination}`;
  const request = axios.get(url, AXIOS_CONFIG());

  return function(dispatch) {
    // Update app state to let the app know the request is starting
    dispatch(requestLists());

    return request.then(
      ({ data }) => dispatch(receiveLists(data)),
      error => {
        let message = getErrorMessage(error);
        toastError(message);
      }
    );
  };
}

// Lets search all shopping lists here
export function searchLists(term, callback) {
  var pagination = paginationParams(page, limit);

  const url = `${ROOT_URL}/shoppinglists/search/?q=${term}${pagination}`;

  const request = axios.get(url, AXIOS_CONFIG());

  return function(dispatch) {
    // Update app state to let the app know the request is starting
    dispatch(requestLists());

    return request.then(
      ({ data }) => dispatch(receiveLists(data)),
      error => {
        let message = getErrorMessage(error);
        toastError(message);
      }
    );
  };
}

// when we want to start creating our list
function requestCreateList() {
  return {
    type: types.CREATE_LIST_REQUEST
  };
}

// When our list is created and a response is returned
function receiveCreateList(data) {
  return {
    type: types.CREATE_LIST_SUCCESS,
    payload: data
  };
}

// If creating a list fails
function failCreateList(error) {
  return {
    type: types.CREATE_LIST_FAILURE,
    payload: error
  };
}

// Lets create shopping list here
export function createList(values, callback) {
  const url = `${ROOT_URL}/shoppinglists/`;
  const request = axios.post(url, values, AXIOS_CONFIG());

  return function(dispatch) {
    // Update app state to let the app know the request is starting
    dispatch(requestCreateList());

    return request.then(
      () => {
        toastSuccess("List was created successfully");
        callback();
      },
      error => {
        let message = getErrorMessage(error);
        toastError(message);
        dispatch(failCreateList(message));
      }
    );
    //.then(data => dispatch(receiveCreateList(data)));
  };
}

// when we want to start creating our user
function requestCreateUser() {
  return {
    type: types.CREATE_USER_REQUEST
  };
}

// When our list is created and a response is returned
function receiveCreateUser(data) {
  return {
    type: types.CREATE_USER_SUCCESS,
    payload: data
  };
}

// Lets create user here
export function createUser(values, callback) {
  const url = `${ROOT_URL}/auth/register`;
  const request = axios.post(url, values, AXIOS_CONFIG());

  return function(dispatch) {
    // Update app state to let the app know the request is starting
    dispatch(requestCreateUser());

    return request
      .then(
        () => {
          toastSuccess("User was created successfully");
          callback();
        },
        error => {
          let message = getErrorMessage(error);
          toastError(message);
        }
      )
      .then(data => dispatch(receiveCreateUser(data)));
  };
}

// when we want to start editing our user
function requestEditList() {
  return {
    type: types.EDIT_LIST_REQUEST
  };
}

// When our list is edited and a response is returned
function receiveEditList(data) {
  return {
    type: types.EDIT_LIST_SUCCESS,
    payload: data
  };
}

// Lets update shopping list here
export function editList(id, values, callback) {
  const url = `${ROOT_URL}/shoppinglists/${id}`;
  const request = axios.put(url, values, AXIOS_CONFIG());

  return function(dispatch) {
    // Update app state to let the app know the request is starting
    dispatch(requestEditList());

    return request
      .then(
        () => {
          toastSuccess("List was edited successfully");
          callback();
        },
        error => {
          let message = getErrorMessage(error);
          toastError(message);
        }
      )
      .then(data => dispatch(receiveEditList(data)));
  };
}

// when we want to start deleting our list
function requestDeleteList() {
  return {
    type: types.DELETE_LIST_REQUEST
  };
}

// When our list is deleted and a response is returned
function receiveDeleteList(data) {
  return {
    type: types.DELETE_LIST_SUCCESS,
    payload: data
  };
}

// Lets delete the shopping list with id
export function deleteList(id, callback) {
  const url = `${ROOT_URL}/shoppinglists/${id}`;
  const request = axios.delete(url, AXIOS_CONFIG());

  return function(dispatch) {
    // Update app state to let the app know the request is starting
    dispatch(requestDeleteList());

    return request.then(
      // Refresh data
      ({ data }) => {
        toastSuccess("List was deleted successfully");
        dispatch(fetchLists());
      },
      error => {
        let message = getErrorMessage(error);
        toastError(message);
      }
    );
  };
}

// when we want to start editing our item
function requestEditListItem() {
  return {
    type: types.EDIT_LIST_ITEM_REQUEST
  };
}

// When our item is edited and a response is returned
function receiveEditListItem(data) {
  return {
    type: types.EDIT_LIST_ITEM_SUCCESS,
    payload: data
  };
}

// Lets update shopping Item list here
export function editListItem(listId, id, values, callback) {
  const url = `${ROOT_URL}/shoppinglists/${listId}/items/${id}`;
  const request = axios.put(url, values, AXIOS_CONFIG());

  return function(dispatch) {
    // Update app state to let the app know the request is starting
    dispatch(requestEditListItem());

    return request
      .then(
        () => {
          toastSuccess("Item was edited successfully");
          callback();
        },
        error => {
          let message = getErrorMessage(error);
          toastError(message);
        }
      )
      .then(data => dispatch(receiveEditListItem(data)));
  };
}

// when we want to start adding item to  our list
function requestAddToList() {
  return {
    type: types.ADD_TO_LIST_REQUEST
  };
}

// When our item is added and a response is returned
function receiveAddToList(data) {
  return {
    type: types.ADD_TO_LIST_SUCCESS,
    payload: data
  };
}

// Lets add item to list here
export function addToList(listid, values, callback) {
  const url = `${ROOT_URL}/shoppinglists/${listid}/items`;
  const request = axios.post(url, values, AXIOS_CONFIG());

  return function(dispatch) {
    // Update app state to let the app know the request is starting
    dispatch(requestAddToList());

    return request
      .then(
        () => {
          toastSuccess("Item was added successfully");
          callback();
        },
        error => {
          let message = getErrorMessage(error);
          toastError(message);
        }
      )
      .then(data => dispatch(receiveAddToList(data)));
  };
}

// when we want to start fetching our list items
function requestListItems() {
  return {
    type: types.FETCH_LIST_ITEMS_REQUEST
  };
}

// When we get our requested list items
function receiveListItems(data) {
  return {
    type: types.FETCH_LIST_ITEMS_SUCCESS,
    payload: data
  };
}

// Lets get the items under shopping list with id
export function fetchListItems(id, page = 1, limit = 1) {
  var pagination = paginationParams(page, limit);

  const url = `${ROOT_URL}/shoppinglists/${id}/items${pagination}`;
  const request = axios.get(url, AXIOS_CONFIG());
  return function(dispatch) {
    // Update app state to let the app know the request is starting
    dispatch(requestListItems());

    return request.then(
      ({ data }) => {
        dispatch(receiveListItems(data));
      },
      error => {
        let message = getErrorMessage(error);
        toastError(message);
      }
    );
  };
}

// when we want to start deleting our item
function requestDeleteListItem() {
  return {
    type: types.DELETE_LIST_ITEM_REQUEST
  };
}

// When our list is deleted and a response is returned
function receiveDeleteListItem(data) {
  return {
    type: types.DELETE_LIST_ITEM_SUCCESS,
    payload: data
  };
}

// Lets delete the shopping list item with id
export function deleteListItem(listId, id, callback) {
  const url = `${ROOT_URL}/shoppinglists/${listId}/items/${id}`;
  const request = axios.delete(url, AXIOS_CONFIG());

  return function(dispatch) {
    // Update app state to let the app know the request is starting
    dispatch(requestDeleteList());

    return request.then(
      // Refresh data
      ({ data }) => {
        toastSuccess("Item was deleted successfully");
        dispatch(fetchListItems(listId));
      },
      error => {
        let message = getErrorMessage(error);
        toastError(message);
      }
    );
  };
}

// when we want to start loging in our user
function requestLoginUser() {
  return {
    type: types.LOGIN_USER_REQUEST
  };
}

// When our user is logged in a response is returned
function receiveLoginUser(data) {
  return {
    type: types.LOGIN_USER_SUCCESS,
    payload: data
  };
}

// Lets login user here
export function loginUser(values, callback) {
  const url = `${ROOT_URL}/auth/login`;
  const request = axios.post(url, values, AXIOS_CONFIG());

  return function(dispatch) {
    // Update app state to let the app know the request is starting
    dispatch(requestLoginUser());

    return request
      .then(
        ({ data }) => {
          sessionStorage.setItem("access_token", data.access_token);
          callback();
        },
        error => {
          let message = getErrorMessage(error);
          toastError(message);
        }
      )
      .then(data => dispatch(receiveLoginUser(data)));
  };
}

// when we want to start loging out our user
function requestLogoutUser() {
  return {
    type: types.LOGOUT_USER_REQUEST
  };
}

// When our user is logged out a response is returned
function receiveLogoutUser(data) {
  return {
    type: types.LOGOUT_USER_SUCCESS,
    payload: data
  };
}

// Log out user
export function logoutUser() {
  const url = `${ROOT_URL}/auth/logout`;

  const request = axios.post(url, null, AXIOS_CONFIG());

  return function(dispatch) {
    // Update app state to let the app know the request is starting
    dispatch(requestLogoutUser());

    return request
      .then(
        data => {
          sessionStorage.removeItem("access_token");
          window.location = "/";
        },
        error => {
          let message = getErrorMessage(error);
          toastError(message);
        }
      )
      .then(data => dispatch(receiveLogoutUser(data)));
  };
}

// when we want to start changing our password
function requestChangePassword() {
  return {
    type: types.CHANGE_PASSWORD_REQUEST
  };
}

// When our password is changed and  a response is returned
function receiveChangePassword(data) {
  return {
    type: types.CHANGE_PASSWORD_SUCCESS,
    payload: data
  };
}

// Lets change user password
export function changePassword(values, callback) {
  const url = `${ROOT_URL}/auth/change-password`;
  const request = axios.post(url, values, AXIOS_CONFIG());

  return function(dispatch) {
    // Update app state to let the app know the request is starting
    dispatch(requestChangePassword());

    return request.then(
      data => {
        toastSuccess("Password changed successfully. Please log in again");
        dispatch(logoutUser());
      },
      error => {
        let message = getErrorMessage(error);
        toastError(message);
      }
    );
  };
}
