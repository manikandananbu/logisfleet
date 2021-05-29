import React from "react";
import {
  Typography,
} from "@material-ui/core";

import loginBackground from "../../Assets/loginBg.jpg";
import login from "../../Assets/login.png";

import useStyles from "./styles";

export default function Logo() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
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
      <img src={login} className={classes.image} alt="Logo" />
    </div>
  );
}
