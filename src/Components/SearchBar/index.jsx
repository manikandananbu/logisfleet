import React, { useRef } from "react";
import { Paper, IconButton, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    backgroundColor: "inherit !important",
    marginRight: 30,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default function SearchBar({ setSearchQuery }) {
  const classes = useStyles();
  const query = useRef("");

  function handleOnSearch(event) {
    setSearchQuery(query.current);
  }

  function handleOnChange(event) {
    query.current = event.target.value;
  }

  return (
    <Paper classes={{ root: classes.root }}>
      <InputBase
        className={classes.input}
        onChange={handleOnChange}
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
