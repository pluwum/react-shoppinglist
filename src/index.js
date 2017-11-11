import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import { BrowserRouter, Route } from 'react-router-dom';
import ShoppingLists from './components/shoppinglists';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/shoppinglists" component={ShoppingLists} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
