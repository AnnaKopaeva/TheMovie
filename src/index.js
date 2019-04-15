import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { reducer } from './reducers';
import { getTopMovies } from './actions';

const store = createStore(reducer, applyMiddleware(thunk));
store.dispatch(getTopMovies(2));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement,
);

serviceWorker.unregister();