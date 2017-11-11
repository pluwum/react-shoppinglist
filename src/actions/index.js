import axios from 'axios';

// Lets setup some constants here
const ACCESS_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTA0MzY4ODgsImlhdCI6MTUxMDIyMDg4OCwic3ViIjozfQ.KbvVBnfHxijYVkLxKHfLqstlq4gUBLz_ZUyvFI6bw-w";
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
export const CREATE_LIST = 'CREATE_LIST';

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
export function fetchLists() {
    const url = `${ROOT_URL}/shoppinglists/`;
    const request = axios.get(url, AXIOS_CONFIG);
    console.log('Request:', request);

    return {
        type: FETCH_LISTS,
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