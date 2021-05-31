import React from "react";
import moment from "moment";
import { Button as MuiButton } from "@material-ui/core";

import useStyles from "./styles";

export default function Button({ setFromDate, setToDate }) {
  const classes = useStyles();

  return (
    <MuiButton
      classes={{ root: classes.button }}
      onClick={() => {
        setFromDate(moment().startOf("month").format("YYYY-MM-DD"));
        setToDate(moment().endOf("month").format("YYYY-MM-DD"));
      }}
    >
      CLEAR DATE FILTER
    </MuiButton>
  );
}
