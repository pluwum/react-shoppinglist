import { combineReducers } from 'redux';
import { SearchResultReducer, ShoppingListsReducer } from './reducer_shoppinglist';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  searchResults: SearchResultReducer,
  shoppingLists: ShoppingListsReducer,
  form: FormReducer
});

export default rootReducer;
