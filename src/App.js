import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import { makeStyles } from "@material-ui/core/styles";

import loginBackground from "./Assets/loginBg.jpg";
import login from "./Assets/login.png";

const useStyles = makeStyles((theme) => ({
  login: {
    margin: 20,
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={6}>
        <img
          src={loginBackground}
          alt="loginBackground"
          style={{ width: "100%" }}
        />
        <Typography
          variant="h3"
          style={{
            position: "absolute",
            top: "10%",
            color: "white",
            fontWeight: 600,
            width: "35%",
            left: "5%",
          }}
        >
          Welcome back!
        </Typography>
        <Typography
          variant="subtitle1"
          style={{
            position: "absolute",
            top: "20%",
            color: "white",
            fontWeight: 500,
            width: "35%",
            left: "5%",
          }}
        >
          Let's login to your forum account
        </Typography>
        <img
          src={login}
          alt="Logo"
          style={{
            position: "absolute",
            top: "20%",
            width: "47%",
            height: "70%",
            left: "0",
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          top="30%"
          position="absolute"
          width="40%"
          right="5%"
        >
          <Typography variant="h6">Sign into your account</Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email address"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.login}
          >
            Login
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
