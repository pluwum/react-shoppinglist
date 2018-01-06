import axios from "axios";
import { toastError, toastSuccess } from "../misc/notifications";

const ROOT_URL = "http://localhost:5000/v1";
const AXIOS_CONFIG = function() {
  const ACCESS_TOKEN = sessionStorage.getItem("access_token");
  return {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };
};

// Store action type as constant for easy modification in the future

export const FETCH_LISTS_REQUEST = "FETCH_LISTS_REQUEST";
export const FETCH_LISTS_FAILURE = "FETCH_LISTS_FAILURE";
export const FETCH_LISTS_SUCCESS = "FETCH_LISTS_SUCCESS";

export const CREATE_LIST_REQUEST = "CREATE_LIST_REQUEST";
export const CREATE_LIST_FAILURE = "CREATE_LIST_FAILURE";
export const CREATE_LIST_SUCCESS = "CREATE_LIST_SUCCESS";

export const CREATE_USER_REQUEST = "CREATE_USER_REQUEST";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";

export const EDIT_LIST_REQUEST = "EDIT_LIST_REQUEST";
export const EDIT_LIST_FAILURE = "EDIT_LIST_FAILURE";
export const EDIT_LIST_SUCCESS = "EDIT_LIST_SUCCESS";

export const ADD_TO_LIST_REQUEST = "ADD_TO_LIST_REQUEST";
export const ADD_TO_LIST_FAILURE = "ADD_TO_LIST_FAILURE";
export const ADD_TO_LIST_SUCCESS = "ADD_TO_LIST_SUCCESS";

export const DELETE_LIST_REQUEST = "DELETE_LIST_REQUEST";
export const DELETE_LIST_FAILURE = "DELETE_LIST_FAILURE";
export const DELETE_LIST_SUCCESS = "DELETE_LIST_SUCCESS";

export const EDIT_LIST_ITEM_REQUEST = "EDIT_LIST_ITEM_REQUEST";
export const EDIT_LIST_ITEM_FAILURE = "EDIT_LIST_ITEM_FAILURE";
export const EDIT_LIST_ITEM_SUCCESS = "EDIT_LIST_ITEM_SUCCESS";

export const FETCH_LIST_ITEMS_REQUEST = "FETCH_LIST_ITEMS_REQUEST";
export const FETCH_LIST_ITEMS_FAILURE = "FETCH_LIST_ITEMS_FAILURE";
export const FETCH_LIST_ITEMS_SUCCESS = "FETCH_LIST_ITEMS_SUCCESS";

export const DELETE_LIST_ITEM_REQUEST = "DELETE_LIST_ITEM_REQUEST";
export const DELETE_LIST_ITEM_FAILURE = "DELETE_LIST_ITEM_FAILURE";
export const DELETE_LIST_ITEM_SUCCESS = "DELETE_LIST_ITEM_SUCCESS";

// Authentication

export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";

export const LOGOUT_USER_REQUEST = "LOGOUT_USER_REQUEST";
export const LOGOUT_USER_FAILURE = "LOGOUT_USER_FAILURE";
export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";

export const CHANGE_PASSWORD_REQUEST = "CHANGE_PASSWORD_REQUEST";
export const CHANGE_PASSWORD_FAILURE = "CHANGE_PASSWORD_FAILURE";
export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";

// Prepare pagination parameters
function paginationParams(page, limit) {
  var pagination = "";
  // Check if we have pagination params
  if (typeof page !== "undefined" && typeof limit !== "undefined") {
    pagination = `?limit=${limit}&page=${page}`;
  }
  return pagination;
}

// when we want to start fetching our lists
function requestLists() {
  return {
    type: FETCH_LISTS_REQUEST
  };
}

// When we get our requested lists
function receiveLists(data) {
  return {
    type: FETCH_LISTS_SUCCESS,
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
      error => toastError(error)
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
      error => toastError(error)
    );
  };
}

// when we want to start creating our list
function requestCreateList() {
  return {
    type: CREATE_LIST_REQUEST
  };
}

// When our list is created and a response is returned
function receiveCreateList(data) {
  return {
    type: CREATE_LIST_SUCCESS,
    payload: data
  };
}

// Lets create shopping list here
export function createList(values, callback) {
  const url = `${ROOT_URL}/shoppinglists/`;
  const request = axios.post(url, values, AXIOS_CONFIG());

  return function(dispatch) {
    // Update app state to let the app know the request is starting
    dispatch(requestCreateList());

    return request
      .then(() => callback(), error => toastError(error))
      .then(data => dispatch(receiveCreateList(data)));
  };
}

// when we want to start creating our user
function requestCreateUser() {
  return {
    type: CREATE_USER_REQUEST
  };
}

// When our list is created and a response is returned
function receiveCreateUser(data) {
  return {
    type: CREATE_USER_SUCCESS,
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
      .then(() => callback(), error => toastError(error))
      .then(data => dispatch(receiveCreateUser(data)));
  };
}

// when we want to start editing our user
function requestEditList() {
  return {
    type: EDIT_LIST_REQUEST
  };
}

// When our list is edited and a response is returned
function receiveEditList(data) {
  return {
    type: EDIT_LIST_SUCCESS,
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
      .then(() => callback(), error => toastError(error))
      .then(data => dispatch(receiveEditList(data)));
  };
}

// when we want to start deleting our list
function requestDeleteList() {
  return {
    type: DELETE_LIST_REQUEST
  };
}

// When our list is deleted and a response is returned
function receiveDeleteList(data) {
  return {
    type: DELETE_LIST_SUCCESS,
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
      ({ data }) => dispatch(fetchLists()),
      error => toastError(error)
    );
  };
}

// when we want to start editing our item
function requestEditListItem() {
  return {
    type: EDIT_LIST_ITEM_REQUEST
  };
}

// When our item is edited and a response is returned
function receiveEditListItem(data) {
  return {
    type: EDIT_LIST_ITEM_SUCCESS,
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
      .then(() => callback(), error => toastError(error))
      .then(data => dispatch(receiveEditListItem(data)));
  };
}

// when we want to start adding item to  our list
function requestAddToList() {
  return {
    type: ADD_TO_LIST_REQUEST
  };
}

// When our item is added and a response is returned
function receiveAddToList(data) {
  return {
    type: ADD_TO_LIST_SUCCESS,
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
      .then(() => callback(), error => toastError(error))
      .then(data => dispatch(receiveAddToList(data)));
  };
}

// when we want to start fetching our list items
function requestListItems() {
  return {
    type: FETCH_LIST_ITEMS_REQUEST
  };
}

// When we get our requested list items
function receiveListItems(data) {
  return {
    type: FETCH_LIST_ITEMS_SUCCESS,
    payload: data
  };
}

// Lets get the items under shopping list with id
export function fetchListItems(id, page = 1, limit = 4) {
  var pagination = paginationParams(page, limit);

  const url = `${ROOT_URL}/shoppinglists/${id}/items${pagination}`;
  const request = axios.get(url, AXIOS_CONFIG());
  return function(dispatch) {
    // Update app state to let the app know the request is starting
    dispatch(requestListItems());

    return request.then(
      ({ data }) => dispatch(receiveListItems(data)),
      error => toastError(error)
    );
  };
}

// when we want to start deleting our item
function requestDeleteListItem() {
  return {
    type: DELETE_LIST_ITEM_REQUEST
  };
}

// When our list is deleted and a response is returned
function receiveDeleteListItem(data) {
  return {
    type: DELETE_LIST_ITEM_SUCCESS,
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
      ({ data }) => dispatch(fetchListItems(listId)),
      error => toastError(error)
    );
  };
}

// when we want to start loging in our user
function requestLoginUser() {
  return {
    type: LOGIN_USER_REQUEST
  };
}

// When our user is logged in a response is returned
function receiveLoginUser(data) {
  return {
    type: LOGIN_USER_SUCCESS,
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
        error => toastError(error)
      )
      .then(data => dispatch(receiveLoginUser(data)));
  };
}

// when we want to start loging out our user
function requestLogoutUser() {
  return {
    type: LOGOUT_USER_REQUEST
  };
}

// When our user is logged out a response is returned
function receiveLogoutUser(data) {
  return {
    type: LOGOUT_USER_SUCCESS,
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
        error => toastError(error)
      )
      .then(data => dispatch(receiveLogoutUser(data)));
  };
}

// when we want to start changing our password
function requestChangePassword() {
  return {
    type: CHANGE_PASSWORD_REQUEST
  };
}

// When our password is changed and  a response is returned
function receiveChangePassword(data) {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
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
      data => dispatch(logoutUser()),
      error => toastError(error)
    );
  };
}
