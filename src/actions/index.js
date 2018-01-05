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

export const SEARCH_LISTS = "SEARCH_LISTS";

export const FETCH_LISTS_REQUEST = "FETCH_LISTS_REQUEST";
export const FETCH_LISTS_FAILURE = "FETCH_LISTS_FAILURE";
export const FETCH_LISTS_SUCCESS = "FETCH_LISTS_SUCCESS";

export const CREATE_LIST_REQUEST = "CREATE_LIST_REQUEST";
export const CREATE_LIST_FAILURE = "CREATE_LIST_FAILURE";
export const CREATE_LIST_SUCCESS = "CREATE_LIST_SUCCESS";

export const CREATE_USER = "CREATE_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const EDIT_LIST = "EDIT_LIST";
export const EDIT_LIST_ITEM = "EDIT_LIST_ITEM";
export const FETCH_LIST_ITEMS = "FETCH_LIST_ITEMS";
export const DELETE_LIST = "DELETE_LIST";
export const DELETE_LIST_ITEM = "DELETE_LIST_ITEM";
export const ADD_TO_LIST = "ADD_TO_LIST";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";

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
  var pagination = "";
  // Check if we have pagination params
  if (typeof page !== "undefined" && typeof limit !== "undefined") {
    pagination = `?limit=${limit}&page=${page}`;
  }

  const url = `${ROOT_URL}/shoppinglists/${pagination}`;
  const request = axios.get(url, AXIOS_CONFIG());

  return function(dispatch) {
    // Update app state to let the app know the request is starting
    dispatch(requestLists());

    return request.then(
      ({ data }) => dispatch(receiveLists(data)),
      error => toastError(error.response.data.message)
    );
  };
}

// Lets search all shopping lists here
export function searchLists(term, callback) {
  var pagination = "";
  // Check if we have pagination params
  if (typeof page !== "undefined" && typeof limit !== "undefined") {
    pagination = `&limit=${limit}&page=${page}`;
  }

  const url = `${ROOT_URL}/shoppinglists/search/?q=${term}${pagination}`;

  const request = axios.get(url, AXIOS_CONFIG());

  return function(dispatch) {
    // Update app state to let the app know the request is starting
    dispatch(requestLists());

    return request.then(
      ({ data }) => dispatch(receiveLists(data)),
      error => toastError(error.response.data.message)
    );
  };
}

// Lets create shopping list here
export function createList(values, callback) {
  const url = `${ROOT_URL}/shoppinglists/`;
  const request = axios
    .post(url, values, AXIOS_CONFIG())
    .then(() => {
      toastSuccess("List was created successfully");
      callback();
    })
    .catch(error => toastError(error.response.data.message));
  return {
    type: CREATE_LIST,
    payload: request
  };
}

// Lets create user here
export function createUser(values, callback) {
  const url = `${ROOT_URL}/auth/register`;
  const request = axios
    .post(url, values, AXIOS_CONFIG())
    .then(() => {
      toastSuccess("User was created successfully");
      callback();
    })
    .catch(error => toastError(error.response.data.message));
  return {
    type: CREATE_USER,
    payload: request
  };
}

// Lets update shopping list here
export function editList(id, values, callback) {
  const url = `${ROOT_URL}/shoppinglists/${id}`;
  const request = axios
    .put(url, values, AXIOS_CONFIG())
    .then(() => {
      toastSuccess("Your list was successfully edited!");
      callback();
    })
    .catch(error => toastError(error.response.data.message));
  return {
    type: EDIT_LIST,
    payload: request
  };
}

// Lets update shopping Item list here
export function editListItem(listId, id, values, callback) {
  const url = `${ROOT_URL}/shoppinglists/${listId}/items/${id}`;
  const request = axios
    .put(url, values, AXIOS_CONFIG())
    .then(() => {
      toastSuccess("List Item was edited successfully");
      callback();
    })
    .catch(error => toastError(error.response.data.message));
  return {
    type: EDIT_LIST_ITEM,
    payload: request
  };
}

// Lets add item to list here
export function addToList(listid, values, callback) {
  const url = `${ROOT_URL}/shoppinglists/${listid}/items`;
  const request = axios
    .post(url, values, AXIOS_CONFIG())
    .then(() => {
      toastSuccess("Item was successfully added to list");
      callback();
    })
    .catch(error => toastError(error.response.data.message));
  return {
    type: ADD_TO_LIST,
    payload: request
  };
}

// Lets get the items under shopping list with id
export function fetchListItems(id, page = 1, limit = 4) {
  var pagination = "";
  // Check if we have pagination params
  if (typeof page !== "undefined" && typeof limit !== "undefined") {
    pagination = `?limit=${limit}&page=${page}`;
  }

  const url = `${ROOT_URL}/shoppinglists/${id}/items${pagination}`;
  const request = axios
    .get(url, AXIOS_CONFIG())
    .catch(error => toastError(error.response.data.message));
  return {
    type: FETCH_LIST_ITEMS,
    payload: request
  };
}

// Lets delete the shopping list with id
export function deleteList(id, callback) {
  const url = `${ROOT_URL}/shoppinglists/${id}`;
  const request = axios.delete(url, AXIOS_CONFIG());
  return {
    type: DELETE_LIST,
    payload: id
  };
}

// Lets delete the shopping list with id
export function deleteListItem(listId, id, callback) {
  const url = `${ROOT_URL}/shoppinglists/${listId}/items/${id}`;
  const request = axios
    .delete(url, AXIOS_CONFIG())
    .then(() => {
      toastSuccess("List Item was deleted successfully");
      callback();
    })
    .catch(error => toastError(error.response.data.message));
  return {
    type: DELETE_LIST_ITEM,
    payload: id
  };
}

// Lets login user here
export function loginUser(values, callback) {
  const url = `${ROOT_URL}/auth/login`;
  const request = axios
    .post(url, values, AXIOS_CONFIG())
    .catch(error => toastError(error.response.data.message))
    .then(response => {
      sessionStorage.setItem("access_token", response.data.access_token);
      callback();
    });
  return {
    type: LOGIN_USER,
    payload: request
  };
}

// Log out user
export function logoutUser(callback) {
  const url = `${ROOT_URL}/auth/logout`;

  const request = axios
    .post(url, null, AXIOS_CONFIG())
    .catch(error => toastError(error.response.data.message))
    .then(response => {
      sessionStorage.removeItem("access_token");
      callback();
    });
  return {
    type: LOGOUT_USER,
    payload: request
  };
}

// Lets change user password
export function changePassword(values, callback) {
  const url = `${ROOT_URL}/auth/change-password`;
  const request = axios
    .post(url, values, AXIOS_CONFIG())
    .then(() => {
      toastSuccess("User password changed successfully");
      callback();
    })
    .catch(error => toastError(error.response.data.message));
  return {
    type: CHANGE_PASSWORD
  };
}
