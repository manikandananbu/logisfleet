import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    alignItems: "baseline",
    display: "flex",
    flex: "auto",
  },
  buttonGroup: {
    float: "right",
    marginTop: "15px",
  },
  typography: {
    color: "white",
    flex: "auto",
    fontWeight: 600,
    marginRight: 10,
    textAlign: "end",
  },
  recordTypography: {
    color: "white",
    fontWeight: 600,
    marginLeft: 10,
    textAlign: "end",
  },
});

export default useStyles;
