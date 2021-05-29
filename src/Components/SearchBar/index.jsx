import React, { useRef } from "react";
import { Paper, IconButton, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles";

export default function SearchBar({ setSearchQuery }) {
  const queryRef = useRef("");
  const classes = useStyles();

  function handleOnSearch(event) {
    setSearchQuery(queryRef.current);
  }

  function handleOnChange(event) {
    queryRef.current = event.target.value;
  }

  return (
    <Paper classes={{ root: classes.root }}>
      <InputBase
        className={classes.input}
        onChange={handleOnChange}
        onBlur={handleOnSearch}
        placeholder="Search"
      />
      <IconButton
        type="submit"
        onClick={handleOnSearch}
        className={classes.iconButton}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
