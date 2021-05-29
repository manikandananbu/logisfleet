import React, { Fragment, useState } from "react";
import { Box, TextField } from "@material-ui/core";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import DesktopDateRangePicker from "@material-ui/lab/DesktopDateRangePicker";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    height: 40,
  },
  root: {
    "& .MuiFormLabel-root": {
      // fontWeight: 600,
      fontSize: "12px",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "rgba(0, 0, 0, 0.6)",
    },
  },
}));

export default function ResponsiveDateRangePicker() {
  const [value, setValue] = useState([null, null]);
  const classes = useStyles();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDateRangePicker
        style={{
          alignItems: "end",
        }}
        startText="Start date"
        endText="End date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <Fragment>
            <TextField
              classes={{ root: classes.root }}
              InputProps={{
                classes: { root: classes.text },
              }}
              {...startProps}
            />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField
              classes={{ root: classes.root }}
              InputProps={{
                classes: { root: classes.text },
              }}
              {...endProps}
            />
          </Fragment>
        )}
      />
    </LocalizationProvider>
  );
}
