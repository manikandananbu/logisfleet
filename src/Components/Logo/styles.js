import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    flexBasis: "50%",
    height: "100%",
  },
  login: {
    margin: 20,
  },
  loginBackground: {
    width: "100%",
    height: "100%",
  },
  logoTypography: {
    position: "absolute",
    top: "15%",
    color: "white",
    width: "35%",
    left: "5%",
  },
  image: {
    position: "absolute",
    top: "20%",
    width: "47%",
    height: "70%",
    left: "0",
  },
});

export default useStyles;
