import React, { Fragment } from "react";
import moment from "moment";
import { Box, TextField } from "@material-ui/core";

import Button from "./Button";
import useStyles from "./styles";

export default function InputComponent({
  endProps,
  setFromDate,
  setToDate,
  startProps,
}) {
  const classes = useStyles();

  return (
    <Fragment>
      <TextField
        classes={{ root: classes.textField }}
        variant="standard"
        InputProps={{
          classes: { root: classes.input },
        }}
        {...startProps}
        inputProps={{
          ...startProps.inputProps,
          placeholder: moment().format("MM/DD/YYYY"),
        }}
        label="Start Date"
        helperText=""
      />
      <Box sx={{ mx: 2 }}> to </Box>
      <TextField
        classes={{ root: classes.textField }}
        variant="standard"
        InputProps={{
          classes: { root: classes.input },
        }}
        {...endProps}
        label="End Date"
        inputProps={{
          ...endProps.inputProps,
          placeholder: moment().format("MM/DD/YYYY"),
        }}
        helperText=""
      />
      <Button setFromDate={setFromDate} setToDate={setToDate} />
    </Fragment>
  );
}
