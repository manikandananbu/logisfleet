import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  textField: {
    "& .MuiFormLabel-root": {
      fontSize: "12px",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "rgba(0, 0, 0, 0.6)",
    },
  },
  input: {
    height: 40,
  },
  button: {
    backgroundColor: "#7118be",
    borderColor: "white",
    color: "white",
    marginLeft: 10,
  },
});

export default useStyles;
