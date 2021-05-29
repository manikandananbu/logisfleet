import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    flexBasis: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  clearButton: {
    borderRadius: "100px",
    backgroundColor: "#7118be",
    marginRight: 10,
    textTransform: "capitalize",
  },
});

export default useStyles
