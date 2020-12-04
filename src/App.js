import React from "react";
import { singIn } from "./store/actionCreators/user";
import { useDispatch, useSelector } from "react-redux";

import { Switch, Route } from "react-router-dom";

import SignIn from "./components/SignIn/SignIn";
import Dashbaord from "./components/Dashboard/Dashboard";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/dashboard" exact component={Dashbaord} />
        <Route path="/signin" exact component={SignIn} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
