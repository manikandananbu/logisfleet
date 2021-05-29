import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Route, Redirect, Switch } from "react-router-dom";

// Containers
const DefaultLayout = React.lazy(() => import("./Pages/Home"));

function Spinner() {
  return <div>Loading....</div>;
}

function AuthRoute() {
  const [jobData, setJobData] = useState();
  const token = localStorage.getItem("logisfleet_token");

  useEffect(async () => {
    const response = await axios
      .get(
        `https://test-api.logisfleet.com/job?currentPage=1&pageSize=500&searchQuery&fromDate=2021-04-01&toDate=2021-07-31`,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        return res;
      });

    setJobData(response.data);
  }, [token]);

  return (
    <Fragment>
      {localStorage.getItem("logisfleet_token") ? (
        <React.Suspense fallback={<Spinner />}>
          <Switch>
            <Route
              path="/home"
              name="Home"
              render={(props) => (
                <DefaultLayout jobData={jobData} {...props} />
              )}
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
