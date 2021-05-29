import React from "react";
import {
  Grid,
  Typography,
} from "@material-ui/core";

import loginBackground from "../../Assets/loginBg.jpg";
import login from "../../Assets/login.png";

import useStyles from "./styles";

export default function Logo() {
  const classes = useStyles();

  return (
    <Grid item xs={6}>
      <img
        src={loginBackground}
        className={classes.loginBackground}
        alt="loginBackground"
      />
      <Typography
        className={classes.logoTypography}
        style={{
          fontWeight: 600,
        }}
        variant="h3"
      >
        Welcome back!
      </Typography>
      <Typography
        className={classes.subtitle}
        style={{
          fontWeight: 500,
        }}
        variant="subtitle1"
      >
        Let's login to your forum account
      </Typography>
      <img src={login} className={classes.image} alt="Logo" />
    </Grid>
  );
}
