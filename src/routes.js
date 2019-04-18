import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Feed from './containers/Feed';
import Details from './components/Details';


export const MainRouter = () => (
  <Router>
    <Route path="/" exact component={Feed} />
    <Route path="/details/:id" exact component={Details} />
  </Router>
);

export default MainRouter;
