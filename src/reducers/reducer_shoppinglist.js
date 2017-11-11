import { SEARCH_LISTS, FETCH_LISTS } from '../actions/index';
import _ from 'lodash';

export function SearchResultReducer(state = [], action) {
    console.log('action received:', action);
    switch (action.type) {
        case SEARCH_LISTS:
            console.log('Shopping list found: ', action.payload.data);
            return action.payload.data;
    }
    return state;
}

export function ShoppingListsReducer(state = {}, action) {
    console.log('action received:', action);
    switch (action.type) {
        case FETCH_LISTS:
            console.log('Shopping list found: ', action.payload.data);
            return _.mapKeys(action.payload.data, "id");
        default:
            return state;
    }

}