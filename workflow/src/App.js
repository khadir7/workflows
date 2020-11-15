import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "Header";
import Login from "Login";
import Workflow from "Workflow";
import Node from "Node";

const App = (props) => (
  <>
    <Header />
    <Switch>
      <Route exact path={"/"}>
        <Login />
      </Route>
      <Route path={"/workflow"}>
        <Workflow />
      </Route>
      <Route path={"/node/:id"}>
        <Node />
      </Route>
    </Switch>
  </>
);

export default App;
