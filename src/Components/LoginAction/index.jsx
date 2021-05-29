import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import LockIcon from "@material-ui/icons/Lock";

import useStyles from "./styles";

export default function LoginAction({ onLogin }) {
  const classes = useStyles();

  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleOnLogin() {
    const user = {
      email: userEmail,
      password: password,
    };
    onLogin(user);
  }

  return (
    <Grid item xs={6}>
      <Box display="grid" top="15%" position="absolute" right="10%">
        <Typography className={classes.typography} variant="h4">
          Sign into your account
        </Typography>
        <TextField
          className={classes.textField}
          id="email"
          label="Email address"
          variant="standard"
          placeholder="example@gmail.com"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          inputProps={{
            className: classes.input,
          }}
          InputProps={{
            className: classes.icon,
            startAdornment: (
              <InputAdornment position="start">
                <MailIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          className={classes.textField}
          id="password"
          label="Password"
          variant="standard"
          placeholder="******"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          inputProps={{
            className: classes.input,
          }}
          InputProps={{
            className: classes.icon,
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
        <Button
          className={classes.button}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleOnLogin}
        >
          Login
        </Button>
      </Box>
    </Grid>
  );
}
