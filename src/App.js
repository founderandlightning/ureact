import React from 'react';
import { Switch, Route } from "react-router-dom";
import {
  LandingRouter,
} from "routers";

const App = () => (
  <Switch>
    <Route path="/" component={LandingRouter} />
    <Route render={() => <div>404</div>} />
  </Switch>
);

export default App;
