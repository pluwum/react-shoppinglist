import axios from "axios";
import { ROOT_URL, AXIOS_CONFIG } from "../configs/axios";
import { paginationParams, getErrorMessage } from "../helpers/misc.js";

/**
 *  Shopping List API Calls
 */

export function apiFetchLists(page, limit) {
  var pagination = paginationParams(page, limit);

  const url = `${ROOT_URL}/shoppinglists/?${pagination}`;
  const request = axios.get(url, AXIOS_CONFIG());
  return request;
}

export function apiSearchLists(term, page = 1, limit = 4) {
  var pagination = paginationParams(page, limit);

  const url = `${ROOT_URL}/shoppinglists/search/?q=${term}&${pagination}`;

  const request = axios.get(url, AXIOS_CONFIG());

  return request;
}

export function apiCreateList(values, callback) {
  const url = `${ROOT_URL}/shoppinglists/`;
  const request = axios.post(url, values, AXIOS_CONFIG());
  return request;
}

export function apiCreateUser(values) {
  const url = `${ROOT_URL}/auth/register`;
  const request = axios.post(url, values, AXIOS_CONFIG());
  return request;
}

export function apiEditList(id, values) {
  const url = `${ROOT_URL}/shoppinglists/${id}`;
  const request = axios.put(url, values, AXIOS_CONFIG());
  return request;
}

export function apiDeleteList(id) {
  const url = `${ROOT_URL}/shoppinglists/${id}`;
  const request = axios.delete(url, AXIOS_CONFIG());
  return request;
}

/**
 *  Shopping list API Calls
 */
export function apiFetchListItems(id, page = 1, limit = 4) {
  var pagination = paginationParams(page, limit);

  const url = `${ROOT_URL}/shoppinglists/${id}/items?${pagination}`;
  const request = axios.get(url, AXIOS_CONFIG());
  return request;
}

export function apiSearchListItems(id, term, page = 1, limit = 4) {
  var pagination = paginationParams(page, limit);

  const url = `${ROOT_URL}/shoppinglists/search/${id}/?q=${term}&${pagination}`;

  const request = axios.get(url, AXIOS_CONFIG());
  return request;
}

export function apiAddToList(listid, values) {
  const url = `${ROOT_URL}/shoppinglists/${listid}/items`;
  const request = axios.post(url, values, AXIOS_CONFIG());
  return request;
}

export function apiEditListItem(listId, id, values) {
  const url = `${ROOT_URL}/shoppinglists/${listId}/items/${id}`;
  const request = axios.put(url, values, AXIOS_CONFIG());
  return request;
}

export function apiDeleteListItem(listId, id) {
  const url = `${ROOT_URL}/shoppinglists/${listId}/items/${id}`;
  const request = axios.delete(url, AXIOS_CONFIG());
  return request;
}

/**
 * Auth API calls section
 */

export function apiLoginUser(values) {
  const url = `${ROOT_URL}/auth/login`;
  const request = axios.post(url, values, AXIOS_CONFIG());
  return request;
}

export function apiLogoutUser() {
  const url = `${ROOT_URL}/auth/logout`;

  const request = axios.post(url, null, AXIOS_CONFIG());
  return request;
}

export function apiChangePassword(values) {
  const url = `${ROOT_URL}/auth/change-password`;
  const request = axios.post(url, values, AXIOS_CONFIG());
  return request;
}
