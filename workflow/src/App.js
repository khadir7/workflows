import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "Header";
import Login from "Login";
const App = (props) => (
  <>
    <Header />
    <Switch>
      <Route exact path={"/"}>
        <Login/>
      </Route>
    </Switch>
  </>
);

export default App;
