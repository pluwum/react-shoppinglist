import axios from 'axios';

// Lets setup some constants here
const ACCESS_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTA0MzY4ODgsImlhdCI6MTUxMDIyMDg4OCwic3ViIjozfQ.KbvVBnfHxijYVkLxKHfLqstlq4gUBLz_ZUyvFI6bw-w";
const ROOT_URL = "http://localhost:5000";
const AXIOS_CONFIG = {
    headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
    }
};

// Store action type as constant for easy modification in the future
export const FETCH_LISTS = 'FETCH_LISTS';

// Lets fetch all shopping lists here
export function fetchLists(term) {
    const url = `${ROOT_URL}/shoppinglists/search/?q=${term}`;
    const request = axios.get(url, null, AXIOS_CONFIG);
    return {
        type: FETCH_LISTS,
        payload: request
    }
}