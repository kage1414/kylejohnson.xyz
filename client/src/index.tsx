import { HashRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/" >
        <App />
      </Route>
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);
