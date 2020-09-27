import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Generator from './pages/Generator';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/generator">
          <Generator />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
