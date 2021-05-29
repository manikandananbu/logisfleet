import React, { useLayoutEffect, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Typography, TablePagination, Button } from "@material-ui/core";
import { XGrid } from "@material-ui/x-grid";
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
    "& .MuiIconButton-root": {
      color: "white",
    },
    " & .MuiDataGrid-root .MuiDataGrid-columnHeader:focus, .MuiDataGrid-root .MuiDataGrid-cell:focus": {
      outline: "0px",
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

  const history = useHistory();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useLayoutEffect(() => {
    const children = [
      ...(document.getElementsByClassName("MuiDataGrid-main")[0]?.children ||
        []),
    ];

    const element = children.find((child) =>
      child.innerText.includes("Material-UI X Unlicensed product")
    );

    if (!!element) {
      element.hidden = true;
    }
  });

  const classes = useStyles();

  function handleOnLogOut() {
    localStorage.removeItem("logisfleet_token");
    history.push("./login");
    toast.success("Log out  Successfully");
  }

  return (
    <div className={classes.root}>
      <div style={{ display: "flex" }}>
        <Typography
          variant="h4"
          style={{
            textAlign: "end",
            color: "#322441",
            flexBasis: "50%",
          }}
        >
          Report
        </Typography>

        <div
          style={{
            flexBasis: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button
            style={{
              borderRadius: "100px",
              backgroundColor: "#7118be",
              marginRight: 10,
              textTransform: 'capitalize',
            }}
            type="submit"
            onClick={handleOnLogOut}
            variant="contained"
            color="primary"
          >
            Log Out
          </Button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          height: "40px",
          margin: "30px 50px 50px",
        }}
      >
        <SearchBar />
        <DatePicker />
      </div>
      <XGrid
        className={classes.dataGrid}
        columns={columns}
        id="jobId"
        disableColumnMenu
        hideFooterPagination
        rows={(jobData?.data || []).map((data) => ({
          ...data,
          id: data.jobId,
        }))}
        hideFooter
      />
      <TablePagination
        component="div"
        count={(jobData?.data || []).length}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[50, 100, 300, 500]}
      />
    </div>
  );
}
