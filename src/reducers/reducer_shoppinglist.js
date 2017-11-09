import { SEARCH_LISTS } from '../actions/index'
export default function (state = [], action) {
    console.log('action received:', action);
    switch (action.type) {
        case SEARCH_LISTS:
            console.log('Shopping list found: ', action.payload.data);
            return action.payload.data;
    }
    return state;
}