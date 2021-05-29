import React, { Fragment } from "react";

import { Route, Redirect, Switch } from "react-router-dom";

import Spinner from './Components/Spinner'

// Containers
const DefaultLayout = React.lazy(() => import("./Pages/Home"));

function AuthRoute() {
  return (
    <Fragment>
      {localStorage.getItem("logisfleet_token") ? (
        <React.Suspense fallback={<Spinner loading/>}>
          <Switch>
            <Route
              path="/home"
              name="Home"
              render={(props) => <DefaultLayout {...props} />}
            />

            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </Switch>
        </React.Suspense>
      ) : (
        <Redirect to={"/login"} />
      )}
    </Fragment>
  );
}

export default AuthRoute;
