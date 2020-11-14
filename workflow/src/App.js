import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "Header";
const App = (props) => (
  <>
    <Header />
    <Switch>
      <Route exact path={"/"}>
        <div>Home page</div>
      </Route>
    </Switch>
  </>
);

export default App;
