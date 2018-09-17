import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Contact } from './containers';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Contact" component={Contact} />
    </Switch>
  </BrowserRouter>
);

export { App };
