import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    alignItems: "baseline",
    display: "flex",
  },
  buttonGroup: {
    float: "right",
    marginRight: "50px",
    marginTop: "15px",
  },
  typography: {
    color: "white",
    flexBasis: "100%",
    fontWeight: 600,
    marginRight: 10,
    textAlign: "end",
  },
});

export default useStyles;
