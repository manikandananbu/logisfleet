import React from "react";
import { ButtonGroup as MuiButtonGroup, Button } from "@material-ui/core";

import useStyles from "./styles";

const PAGINATION_OPTIONS = [50, 100, 300, 500];

export default function ButtonGroup({ pageSize, setPageSize }) {
  const classes = useStyles();

  return (
    <MuiButtonGroup
      classes={{ root: classes.buttonGroup }}
      aria-label="contained primary button group"
      onClick={(event) => {
        setPageSize(Number(event.target.innerText));
      }}
      variant="contained"
    >
      {PAGINATION_OPTIONS.map((option, index) => (
        <Button
          key={index}
          style={{
            backgroundColor:
              option === pageSize ? "rgb(159, 107, 203)" : "#7118be",
            borderColor: "white",
          }}
        >
          {option}
        </Button>
      ))}
    </MuiButtonGroup>
  );
}
