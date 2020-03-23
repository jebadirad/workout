import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Workout from './Workout';

const Content = () => (
  <main style={{ width: '100vw', height: '100vh' }}>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/workout">
        <Workout />
      </Route>
    </Switch>
  </main>
);


export default Content;
