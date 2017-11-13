import { combineReducers } from 'redux';
import {
  SearchResultReducer, ShoppingListsReducer, ShoppingListReducer, ShoppingListItemsReducer
} from './reducer_shoppinglist';

import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  searchResults: SearchResultReducer,
  shoppingLists: ShoppingListsReducer,
  shoppingList: ShoppingListReducer,
  shoppingListItems: ShoppingListItemsReducer,
  form: FormReducer
});

export default rootReducer;
