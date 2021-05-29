import React from "react";
import { toast } from "react-toastify";
import Button from "@material-ui/core/Button";

// hooks
import { useHistory } from "react-router-dom";

import useStyles from "./styles";

export default function Logout() {
  const history = useHistory();
  const classes = useStyles();

  function handleOnLogOut() {
    localStorage.removeItem("logisfleet_token");
    history.push("./login");
    toast.success("Log out  Successfully");
  }

  return (
    <div className={classes.container}>
      <Button
        classes={{ root: classes.clearButton }}
        type="submit"
        onClick={handleOnLogOut}
        variant="contained"
        color="primary"
      >
        Log Out
      </Button>
    </div>
  );
}
