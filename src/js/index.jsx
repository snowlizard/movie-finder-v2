import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { searchReducer } from './redux/searchReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import App from './app';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* eslint-disable no-underscore-dangle */
const store = createStore(
  searchReducer,
  composeEnhancers(applyMiddleware(promiseMiddleware))
);
/* eslint-enable */

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
