import React, { Fragment } from "react";

import { Route, Redirect, Switch } from "react-router-dom";

// Containers
const DefaultLayout = React.lazy(() => import("./Pages/Home"));

function Spinner() {
  return <div>Loading....</div>;
}

function AuthRoute() {
  return (
    <Fragment>
      {localStorage.getItem("logisfleet_token") ? (
        <React.Suspense fallback={<Spinner />}>
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
