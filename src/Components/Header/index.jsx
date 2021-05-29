import React from "react";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";

export default function Header() {
  const classes = useStyles();

  return (
    <Typography classes={{ root: classes.header }} variant="h4">
      Logisfleet
    </Typography>
  );
}
