import React, { useState } from "react";
import { Typography, TablePagination } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/styles";

import DatePicker from "../../Components/DatePicker";
import SearchBar from "../../Components/SearchBar";

import { columns } from "./constants";

const rows = [
  {
    id: 1,
    customerName: "Jane",
    vehicleName: "Carter",
  },
  {
    id: 2,
    customerName: "Jack",
    vehicleName: "Smith",
  },
  {
    id: 3,
    customerName: "Gill",
    vehicleName: "Martin",
  },
];

const useStyles = makeStyles({
  root: {
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
  },
  dataGrid: {
    margin: "0px 50px",
    backgroundColor: "rgb(255, 255, 255)",
    height: "calc(100% - 220px)",
  },
});

export default function OrderSortingGrid({ jobData }) {
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        variant="h4"
        style={{
          textAlign: "center",
          color: "#322441",
        }}
      >
        Report
      </Typography>
      <div
        style={{
          display: "flex",
          height: "40px",
          margin: "30px 30px 50px",
        }}
      >
        <SearchBar />
        <DatePicker />
      </div>
      <DataGrid
        className={classes.dataGrid}
        columns={columns}
        disableColumnMenu
        hideFooterPagination
        rows={rows}
      />
      <TablePagination
        component="div"
        count={rows.length}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[50, 100, 300, 500]}
      />
    </div>
  );
}
