import { combineReducers } from 'redux';
import { SearchResultResult } from './reducer_shoppinglist';

const rootReducer = combineReducers({
  searchResults: SearchResultResult
});

export default rootReducer;
