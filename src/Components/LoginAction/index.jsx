import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Box,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import LockIcon from "@material-ui/icons/Lock";

import useStyles from "./styles";

const Schema = Yup.object().shape({
  email: Yup.string().email().required("Enter your Email"),
  password: Yup.string().required("Enter your password"),
});

export default function LoginAction({ onLogin }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Schema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 500);

          onLogin(values);
        }}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleSubmit,
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <Box display="flex" flexDirection= "column">
                <Typography className={classes.typography} variant="h4">
                  Sign into your account
                </Typography>
                <TextField
                  className={classes.textField}
                  id="email"
                  label="Email address"
                  variant="standard"
                  placeholder="example@gmail.com"
                  value={values.email}
                  onChange={handleChange}
                  error={Boolean(errors.email) && touched.email}
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

                {errors.email && touched.email && (
                  <Typography className={classes.error}>
                    {errors.email}
                  </Typography>
                )}

                <TextField
                  className={classes.textField}
                  id="password"
                  label="Password"
                  variant="standard"
                  placeholder="******"
                  type="password"
                  error={Boolean(errors.password) && touched.password}
                  value={values.password}
                  onChange={handleChange}
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

                {errors.password && touched.password && (
                  <Typography className={classes.error}>
                    {errors.password}
                  </Typography>
                )}
                <Button
                  className={classes.button}
                  disabled={isSubmitting}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Login
                </Button>
              </Box>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
