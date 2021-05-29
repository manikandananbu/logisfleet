import React from "react";
import { Button as MuiButton } from "@material-ui/core";

import useStyles from "./styles";

export default function Button({ setFromDate, setToDate }) {
  const classes = useStyles();

  return (
    <MuiButton
      classes={{ root: classes.button }}
      onClick={() => {
        setFromDate('');
        setToDate('');
      }}
    >
      CLEAR DATE FILTER
    </MuiButton>
  );
}
