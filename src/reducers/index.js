import { combineReducers } from 'redux';
import { SearchResultReducer, ShoppingListsReducer } from './reducer_shoppinglist';

const rootReducer = combineReducers({
  searchResults: SearchResultReducer,
  shoppingLists: ShoppingListsReducer
});

export default rootReducer;
