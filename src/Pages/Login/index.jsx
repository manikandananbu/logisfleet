import React, { Fragment, useEffect } from "react";
import axios from "axios";
import { useHistory, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Grid from "@material-ui/core/Grid";

import Logo from "../../Components/Logo";
import LoginAction from "../../Components/LoginAction";

export default function Login() {
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("logisfleet_token")) {
      history.push("/");
    }
  }, [history]);

  function onLogin(user) {
    axios
      .post(`https://test-api.logisfleet.com/auth/login`, user)
      .then((res) => {
        toast.success("Login Successfully");
        localStorage.setItem("logisfleet_token", res.data);
        history.push("/");
      })
      .catch((error) => {
        toast.error(error?.response?.data);
      });
  }
  return (
    <Fragment>
      {localStorage.getItem("logisfleet_token") ? (
        <Redirect to="/home" />
      ) : (
        <Grid container>
          <Logo />
          <LoginAction onLogin={onLogin} />
        </Grid>
      )}
    </Fragment>
  );
}
