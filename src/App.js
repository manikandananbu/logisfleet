// @flow

import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

// Containers
const DefaultLayout = React.lazy(() => import("./AuthRoute"));

// Pages
const Login = React.lazy(() => import("./Pages/Login"));

function Spinner() {
  return <div>Loading....</div>;
}
const App = () => {
  return (
    <HashRouter>
      <React.Suspense fallback={<Spinner />}>
        <Switch>
          <Route
            exact
            path="/login"
            name="Login Page"
            render={(props) => <Login {...props} />}
          />
          <Route
            path="/"
            name="Home"
            render={(props) => <DefaultLayout {...props} />}
          />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
};

export default App;
