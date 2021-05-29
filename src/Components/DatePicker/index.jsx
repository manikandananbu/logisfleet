import React, { Fragment } from "react";
import { Box, TextField, Button } from "@material-ui/core";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import MobileDateRangePicker from "@material-ui/lab/MobileDateRangePicker";
import moment from "moment";

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

export default function ResponsiveDateRangePicker({
  fromDate,
  toDate,
  setFromDate,
  setToDate,
}) {
  const classes = useStyles();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDateRangePicker
        style={{
          alignItems: "end",
        }}
        value={[fromDate || null, toDate || null]}
        onChange={() => {}}
        onAccept={([startDate, endDate]) => {
          if (startDate && endDate) {
            setFromDate(startDate);
            setToDate(endDate);
          }
        }}
        renderInput={(startProps, endProps) => (
          <Fragment>
            <TextField
              classes={{ root: classes.root }}
              variant="standard"
              InputProps={{
                classes: { root: classes.text },
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
              classes={{ root: classes.root }}
              variant="standard"
              InputProps={{
                classes: { root: classes.text },
              }}
              {...endProps}
              label="End Date"
              inputProps={{
                ...endProps.inputProps,
                placeholder: moment().format("MM/DD/YYYY"),
              }}
              helperText=""
            />
            <Button
              style={{
                backgroundColor: "#7118be",
                borderColor: "white",
                color: "white",
                marginLeft: 10,
              }}
              onClick={() => {
                setFromDate(null);
                setToDate(null);
              }}
            >
              CLEAR DATE FILTER
            </Button>
          </Fragment>
        )}
      />
    </LocalizationProvider>
  );
}
