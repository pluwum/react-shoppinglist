import { combineReducers } from 'redux';
import {
  SearchResultReducer,
  ShoppingListsReducer,
  ShoppingListItemsReducer,
  AuthReducer
} from './reducer_shoppinglist';

import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  searchResults: SearchResultReducer,
  shoppingLists: ShoppingListsReducer,
  shoppingListItems: ShoppingListItemsReducer,
  form: FormReducer,
  authData: AuthReducer
});

export default rootReducer;
