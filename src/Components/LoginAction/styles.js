import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    flexBasis: "50%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  typography: {
    fontWeight: 600,
  },
  textField: {
    marginTop: '40px !important',
    "& .MuiFormLabel-root": {
      fontWeight: 600,
      fontSize: "22px",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "rgba(0, 0, 0, 0.6)",
    },
  },
  input: {
    marginBottom: 5,
    height: 30,
  },
  icon: {
    marginTop: "40px !important",
  },
  button: {
    margin: "20px !important",
    padding: "10px 30px !important",
    borderRadius: "100px !important",
    backgroundColor: "#7118be !important",
    width: "150px !important",
    marginLeft: "30% !important",
  },
  error: {
    color: 'red',
    marginTop: '20px !important',
  }
});

export default useStyles;
