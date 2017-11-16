import axios from 'axios';

const ROOT_URL = "http://localhost:5000";
const AXIOS_CONFIG = function () {
    const ACCESS_TOKEN = sessionStorage.getItem('access_token');
    return (
        {
            headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }
    );
}

// Store action type as constant for easy modification in the future
export const SEARCH_LISTS = 'SEARCH_LISTS';
export const FETCH_LISTS = 'FETCH_LISTS';
export const CREATE_LIST = 'CREATE_LIST';
export const CREATE_USER = 'CREATE_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const EDIT_LIST = 'EDIT_LIST';
export const EDIT_LIST_ITEM = 'EDIT_LIST_ITEM';
export const FETCH_LIST_ITEMS = 'FETCH_LIST_ITEMS';
export const DELETE_LIST = 'DELETE_LIST';
export const DELETE_LIST_ITEM = 'DELETE_LIST_ITEM';
export const ADD_TO_LIST = 'ADD_TO_LIST';

// Lets search all shopping lists here
export function searchLists(term) {
    const url = `${ROOT_URL}/shoppinglists/search/?q=${term}`;
    const request = axios.get(url, AXIOS_CONFIG());
    console.log('Request:', request);

    return {
        type: SEARCH_LISTS,
        payload: request
    }
}

// Lets get all shopping lists here
export function fetchLists(id) {
    const url = `${ROOT_URL}/shoppinglists/`;
    const request = axios.get(url, AXIOS_CONFIG());
    console.log('Request:', request);

    return {
        type: FETCH_LISTS,
        payload: request
    }
}

// Lets create shopping list here
export function createList(values, callback) {
    const url = `${ROOT_URL}/shoppinglists/`;
    const request = axios.post(url, values, AXIOS_CONFIG())
        .then(() => callback());
    console.log('Request:', request);

    return {
        type: CREATE_LIST,
        payload: request
    }
}

// Lets create user here
export function createUser(values, callback) {
    const url = `${ROOT_URL}/auth/register`;
    const request = axios.post(url, values, AXIOS_CONFIG())
        .then(() => callback());

    return {
        type: CREATE_USER,
        payload: request
    }
}

// Lets update shopping list here
export function editList(id, values, callback) {
    const url = `${ROOT_URL}/shoppinglists/${id}`;
    const request = axios.put(url, values, AXIOS_CONFIG())
        .then(() => callback());

    return {
        type: EDIT_LIST,
        payload: request
    }
}

// Lets update shopping Item list here
export function editListItem(listId, id, values, callback) {
    const url = `${ROOT_URL}/shoppinglists/${listId}/items/${id}`;
    const request = axios.put(url, values, AXIOS_CONFIG())
        .then(() => callback());

    return {
        type: EDIT_LIST_ITEM,
        payload: request
    }
}

// Lets add item to list here
export function addToList(listid, values, callback) {
    const url = `${ROOT_URL}/shoppinglists/${listid}/items`;
    const request = axios.post(url, values, AXIOS_CONFIG())
        .then(() => callback());

    return {
        type: ADD_TO_LIST,
        payload: request
    }
}

// Lets get the items under shopping list with id
export function fetchListItems(id) {
    const url = `${ROOT_URL}/shoppinglists/${id}/items`;
    const request = axios.get(url, AXIOS_CONFIG());

    return {
        type: FETCH_LIST_ITEMS,
        payload: request
    }
}

// Lets delete the shopping list with id
export function deleteList(id, callback) {
    const url = `${ROOT_URL}/shoppinglists/${id}`;
    const request = axios.delete(url, AXIOS_CONFIG())
        .then(() => callback());

    return {
        type: DELETE_LIST,
        payload: id
    }
}

// Lets delete the shopping list with id
export function deleteListItem(listId, id, callback) {
    const url = `${ROOT_URL}/shoppinglists/${listId}/items/${id}`;
    const request = axios.delete(url, AXIOS_CONFIG())
        .then(() => callback());

    return {
        type: DELETE_LIST_ITEM,
        payload: id
    }
}

// Lets login user here
export function loginUser(values, callback) {
    const url = `${ROOT_URL}/auth/login`;
    const request = axios.post(url, values, AXIOS_CONFIG())
        .catch(function (error) {
            //do this when login is not successful
            console.log('This happened: ', JSON.stringify(error.response.data.message))
        })
        .then((response) => {
            sessionStorage.setItem('access_token', response.data.access_token);
            callback();
        });

    return {
        type: LOGIN_USER,
        payload: request
    }
}