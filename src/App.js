import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import MainRouter from './routes';
import { reducer } from './reducers';

// styles
import './styles/reset.css';
import './styles/normalize.css';

// constants
const store = createStore(reducer, applyMiddleware(thunk));


export const App = () => (
  <Provider store={store}>
    <MainRouter />
  </Provider>
);

export default App;
