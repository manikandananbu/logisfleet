import React from "react";
import { ButtonGroup as MuiButtonGroup, Button } from "@material-ui/core";

import useStyles from "./styles";

const PAGINATION_OPTIONS = [50, 100, 300, 500];

export default function ButtonGroup({
  page,
  pageSize,
  setPage,
  setPageSize,
  totalRecords,
}) {
  const classes = useStyles();

  function handleOnChange(event) {
    const selectedPageSize = Number(event.target.innerText);
    const maxPage = Math.ceil(totalRecords / selectedPageSize);

    if (maxPage < page) {
      setPage(maxPage);
    }
    setPageSize(selectedPageSize);
  }

  return (
    <MuiButtonGroup
      classes={{ root: classes.buttonGroup }}
      aria-label="contained primary button group"
      onClick={handleOnChange}
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
