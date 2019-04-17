import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Feed from './containers/Feed';


export const MainRouter = () => (
  <Router>
    <Route path="/" exact component={Feed} />


    {/*<Route path='/' exact component={WithData(App, '/top_rated')} />*/}
    {/*<Route path='/popular' exact component={WithData(App, '/popular')} />*/}
    {/*<Route path='/latest' exact component={WithData(App, '/latest')} />*/}
    {/*<Route path='/upcoming' exact component={WithData(App, '/upcoming')} />*/}
    {/*<Route path='popular/:id' component={WithData(App, '/popular')} />*/}
    {/*<Route path='latest/:id' component={WithData(App, '/latest')} />*/}
    {/*<Route path='upcoming/:id' component={WithData(App, '/upcoming')} />*/}
  </Router>
);

export default MainRouter;
