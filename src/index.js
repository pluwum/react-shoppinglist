import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import reducers from "./reducers";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShoppingLists from "./components/shoppinglists";
import CreateShoppingList from "./components/create_shoppinglist";
import EditShoppingList from "./components/edit_shoppinglist";
import ShoppingListItems from "./components/shoppinglist_items";
import AddShoppingListItem from "./components/add_shoppinglist_item";
import EditShoppingListItem from "./components/edit_shoppinglist_item";
import ChangePassword from "./components/change_password";
import CreateAccount from "./components/create_account";
import Login from "./components/login";
import logger from "redux-logger";
import ProtectedRoute from "./containers/protect_routes";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(ReduxPromise, logger, thunk)
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route
            path="/shoppinglists/auth/register"
            component={CreateAccount}
          />
          <ProtectedRoute
            path="/shoppinglists/new"
            component={CreateShoppingList}
          />
          <ProtectedRoute
            path="/shoppinglists/password/change"
            component={ChangePassword}
          />
          <ProtectedRoute
            path="/shoppinglists/:listId/items/new"
            component={AddShoppingListItem}
          />
          <ProtectedRoute
            path="/shoppinglists/:listId/items/:id"
            component={EditShoppingListItem}
          />
          <ProtectedRoute
            path="/shoppinglists/:id/edit"
            component={EditShoppingList}
          />
          <ProtectedRoute
            path="/shoppinglists/:id"
            component={ShoppingListItems}
          />
          <ProtectedRoute path="/shoppinglists" component={ShoppingLists} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".react-container")
);
