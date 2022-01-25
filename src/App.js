import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Show from './pages/Show';
import Started from './pages/Started';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/s">
        <Started />
      </Route>
      <Route exact path="/show/:id">
        <Show />
      </Route>
      <Route>This is 404 page</Route>
    </Switch>
  );
}

export default App;
