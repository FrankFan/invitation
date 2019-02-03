import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import HomePage from './components/Home/';
import NoMatch from '@/common/components/NoMatch';

const AppRouter = () => (
  <HashRouter>
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/index' exact component={HomePage} />
      <Route component={NoMatch}/>
    </Switch>
  </HashRouter>
);

export default AppRouter;