import { combineReducers } from "redux";
import { ShoppingListsReducer } from "./shoppinglists";
import { ShoppingListItemsReducer } from "./items";
import { AuthReducer } from "./auth";

import { reducer as FormReducer } from "redux-form";

const rootReducer = combineReducers({
  shoppingLists: ShoppingListsReducer,
  shoppingListItems: ShoppingListItemsReducer,
  form: FormReducer,
  authData: AuthReducer
});

export default rootReducer;
