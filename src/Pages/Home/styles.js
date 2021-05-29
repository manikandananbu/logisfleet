import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  gridContainer: {
    backgroundImage: "linear-gradient(to right, #ffeded , #9861c8)",
    height: "100%",
    position: "absolute",
    width: "100%",

    "& .header": {
      backgroundColor: "rgb(50, 36, 66)",
      color: "rgb(255, 255, 255)",
      fontSize: "15px",
    },
    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: 600,
    },
    "& .MuiDataGrid-row.Mui-odd": {
      backgroundColor: "rgb(206, 206, 206)",
    },
    "& .MuiIconButton-root": {
      color: "white",
    },
    " & .MuiDataGrid-root .MuiDataGrid-columnHeader:focus, .MuiDataGrid-root .MuiDataGrid-cell:focus": {
      outline: "0px",
    },
  },
  headerContainer: {
    display: "flex",
    marginTop: 20,
  },
  filterBar: {
    display: "flex",
    height: "40px",
    margin: "30px 50px 50px",
  },
});

export default useStyles;
