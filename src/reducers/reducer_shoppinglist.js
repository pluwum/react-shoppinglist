import { SEARCH_LISTS, FETCH_LISTS, FETCH_LIST, FETCH_LIST_ITEMS, DELETE_LIST } from '../actions/index';
import _ from 'lodash';

export function SearchResultReducer(state = [], action) {
    console.log('action received:', action);
    switch (action.type) {
        case SEARCH_LISTS:
            console.log('Shopping list found: ', action.payload.data);
            return action.payload.data;

        default:
            return state;
    }

    return state;
}

export function ShoppingListsReducer(state = {}, action) {
    console.log('action received:', action);
    switch (action.type) {
        case FETCH_LISTS:
            console.log('Shopping list found: ', action.payload.data);
            return _.mapKeys(action.payload.data, "id");

        case DELETE_LIST:
            return _.omit(state, action.payload);

        default:
            return state;
    }

}

export function ShoppingListReducer(state = {}, action) {
    console.log('action received:', action);
    switch (action.type) {
        case FETCH_LIST:
            console.log('this Shopping list was found: ', action.payload.data);
            return _.mapKeys(action.payload.data, "id");

        default:
            return state;
    }
}

export function ShoppingListItemsReducer(state = {}, action) {
    console.log('action received:', action);
    switch (action.type) {
        case FETCH_LIST_ITEMS:
            console.log('Shopping list was found with details: ', action.payload.data);
            return _.mapKeys(action.payload.data, "id");

        default:
            return state;
    }

}