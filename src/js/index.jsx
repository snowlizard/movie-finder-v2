import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiidleware from 'redux-promise-middleware';
import App from './app';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(promiseMiidleware()))
);
/* eslint-enable */


render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
