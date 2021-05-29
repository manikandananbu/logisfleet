// @flow

import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Spinner from './Components/Spinner'

// Containers
const DefaultLayout = React.lazy(() => import("./AuthRoute"));

// Pages
const Login = React.lazy(() => import("./Pages/Login"));

const App = () => {
  return (
    <HashRouter>
      <React.Suspense fallback={<Spinner loading/>}>
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
        <ToastContainer autoClose = {2500}/>
      </React.Suspense>
    </HashRouter>
  );
};

export default App;
