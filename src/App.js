import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navs from './components/Nav';
import Home from './pages/Home';
import Started from './pages/Started';

function App() {
  return (
    <div>
      <Navs />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/s">
          <Started />
        </Route>
        <Route>This is 404 page</Route>
      </Switch>
    </div>
  );
}

export default App;
