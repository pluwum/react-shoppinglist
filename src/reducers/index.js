import { AuthReducer } from "./auth";
import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import { ShoppingListItemsReducer } from "./items";
import { ShoppingListsReducer } from "./shoppinglists";

const rootReducer = combineReducers({
  shoppingLists: ShoppingListsReducer,
  shoppingListItems: ShoppingListItemsReducer,
  form: FormReducer,
  authData: AuthReducer
});

export default rootReducer;
