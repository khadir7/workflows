import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "components/Header";
import Login from "pages/Login";
import Workflow from "pages/Workflow";
import Node from "pages/Node";

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
