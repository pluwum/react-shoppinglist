import axios from 'axios';

// Lets setup some constants here
const ACCESS_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTA2NTM0NTgsImlhdCI6MTUxMDQzNzQ1OCwic3ViIjozfQ.4i76daAN8L9zvgzg2B9NWVWrgsKy_PuE3sCMBVUbFyc";
const ROOT_URL = "http://localhost:5000";
const AXIOS_CONFIG = {
    headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
};

// Store action type as constant for easy modification in the future
export const SEARCH_LISTS = 'SEARCH_LISTS';
export const FETCH_LISTS = 'FETCH_LISTS';
export const FETCH_LIST = 'FETCH_LIST';
export const CREATE_LIST = 'CREATE_LIST';
export const EDIT_LIST = 'EDIT_LIST';
export const FETCH_LIST_ITEMS = 'FETCH_LIST_ITEMS';
export const DELETE_LIST = 'DELETE_LIST';

// Lets search all shopping lists here
export function searchLists(term) {
    const url = `${ROOT_URL}/shoppinglists/search/?q=${term}`;
    const request = axios.get(url, AXIOS_CONFIG);
    console.log('Request:', request);

    return {
        type: SEARCH_LISTS,
        payload: request
    }
}

// Lets get all shopping lists here
export function fetchLists(id) {
    const url = `${ROOT_URL}/shoppinglists/`;
    const request = axios.get(url, AXIOS_CONFIG);
    console.log('Request:', request);

    return {
        type: FETCH_LISTS,
        payload: request
    }
}

// Lets get a specific shopping list here
export function fetchList(id) {
    const url = `${ROOT_URL}/shoppinglists/${id}`;
    const request = axios.get(url, AXIOS_CONFIG);
    console.log('Request:', id);

    return {
        type: FETCH_LIST,
        payload: request
    }
}

// Lets create shopping list here
export function createList(values, callback) {
    const url = `${ROOT_URL}/shoppinglists/`;
    const request = axios.post(url, values, AXIOS_CONFIG).then(() => callback());
    console.log('Request:', request);

    return {
        type: CREATE_LIST,
        payload: request
    }
}

// Lets update shopping list here
export function editList(id, values, callback) {
    const url = `${ROOT_URL}/shoppinglists/${id}`;
    const request = axios.put(url, values, AXIOS_CONFIG).then(() => callback());
    console.log('Request:', request);

    return {
        type: EDIT_LIST,
        payload: request
    }
}

// Lets get the items under shopping list with id
export function fetchListItems(id) {
    const url = `${ROOT_URL}/shoppinglists/${id}/items`;
    const request = axios.get(url, AXIOS_CONFIG);
    console.log('Request:', request);

    return {
        type: FETCH_LIST_ITEMS,
        payload: request
    }
}

// Lets delete the shopping list with id
export function deleteList(id, callback) {
    const url = `${ROOT_URL}/shoppinglists/${id}`;
    const request = axios.delete(url, AXIOS_CONFIG).then(() => callback());
    console.log('Request:', request);

    return {
        type: DELETE_LIST,
        payload: id
    }
}