import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingLists from './components/shoppinglists';
import CreateShoppingList from './components/create_shoppinglist';
import EditShoppingList from './components/edit_shoppinglist';
import ShoppingListItems from './components/shoppinglist_items';
import AddShoppingListItem from './components/add_shoppinglist_item';
import EditShoppingListItem from './components/edit_shoppinglist_item';
import CreateAccount from './components/create_account';
import Login from './components/login';
import logger from 'redux-logger';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, logger)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/shoppinglists/auth/register" component={CreateAccount} />
          <Route path="/" component={Login} />
          <Route component={EnsureLoggedIn}>
            <Route path="/shoppinglists/new" component={CreateShoppingList} />
            <Route path="/shoppinglists/:listId/items/new" component={AddShoppingListItem} />
            <Route path="/shoppinglists/:listId/items/:id" component={EditShoppingListItem} />
            <Route path="/shoppinglists/:id/edit" component={EditShoppingList} />
            <Route path="/shoppinglists/:id" component={ShoppingListItems} />
            <Route path="/shoppinglists" component={ShoppingLists} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
