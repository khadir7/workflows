import React from "react";
import { Route, Switch } from "react-router-dom";

// import Login from "components/login";
const App = (props) => (
  <Switch>
    <Route exact path={"/"}>
      <div>Home page</div>
    </Route>
  </Switch>
);

export default App;
