import React from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Logo from "../../Components/Logo";
import LoginAction from "../../Components/LoginAction";

export default function Login() {
  const history = useHistory();

  function onLogin(user) {
    axios
      .post(`https://test-api.logisfleet.com/auth/login`, user)
      .then((res) => {
        localStorage.setItem("logisfleet_token", res);
        history.push("/");
      });
  }
  return (
    <Grid container>
      <Logo />
      <LoginAction onLogin={onLogin} />
    </Grid>
  );
}
