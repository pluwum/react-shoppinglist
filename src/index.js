import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingLists from './components/shoppinglists';
import CreateShoppingList from './components/create_shoppinglist'
import ShoppingListItems from './components/shoppinglist_items';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/shoppinglists/new" component={CreateShoppingList} />
          <Route path="/shoppinglists/:id/edit" component={CreateShoppingList} />
          <Route path="/shoppinglists/:id" component={ShoppingListItems} />
          <Route path="/shoppinglists" component={ShoppingLists} />
        </Switch  >
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
