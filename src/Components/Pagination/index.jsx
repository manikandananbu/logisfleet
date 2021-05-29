import React from "react";
import { Typography } from "@material-ui/core";

import ButtonGroup from "./ButtonGroup";
import useStyles from "./styles";

export default function Pagination({ pageSize, setPageSize }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography classes={{ root: classes.typography }}>Page Size:</Typography>
      <ButtonGroup pageSize={pageSize} setPageSize={setPageSize} />
    </div>
  );
}
