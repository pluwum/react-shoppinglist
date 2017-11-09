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