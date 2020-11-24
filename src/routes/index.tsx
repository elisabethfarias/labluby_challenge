import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
import Followers from '../pages/Followers';
import Following from '../pages/Following';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Dashboard" component={Dashboard} />
    <Route path="/Repository" component={Repository} />
    <Route path="/Followers" component={Followers} />
    <Route path="/Following" component={Following} />
  </Switch>
);

export default Routes;
