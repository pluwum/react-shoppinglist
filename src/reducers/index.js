import { combineReducers } from 'redux';
import { SearchResultReducer } from './reducer_shoppinglist';

const rootReducer = combineReducers({
  searchResults: SearchResultReducer
});

export default rootReducer;
