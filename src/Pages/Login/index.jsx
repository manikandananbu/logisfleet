import React from "react";
import Grid from "@material-ui/core/Grid";

import Logo from "../../Components/Logo";
import LoginAction from "../../Components/LoginAction";

export default function Login() {
  return (
    <Grid container>
      <Logo />
      <LoginAction />
    </Grid>
  );
}
