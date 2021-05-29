import React, { useLayoutEffect, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Typography, Button, ButtonGroup } from "@material-ui/core";
import { XGrid } from "@material-ui/x-grid";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import DatePicker from "../../Components/DatePicker";
import SearchBar from "../../Components/SearchBar";
import Spinner from "../../Components/Spinner";

import { columns } from "./constants";

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
    height: "calc(100% - 240px)",
  },
});

export default function OrderSortingGrid() {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [jobData, setJobData] = useState();
  const [pageSize, setPageSize] = useState(50);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortModel, setSortModel] = useState();
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const token = localStorage.getItem("logisfleet_token");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await axios.get(
        `https://test-api.logisfleet.com/job?currentPage=1&pageSize=${pageSize}&searchQuery=${searchQuery}&fromDate=2021-04-01&toDate=2021-07-31&sortColumn=${
          sortModel?.field || ""
        }&sortDir=${
          sortModel?.sort || ""
        }&fromDate=${fromDate}&toDate=${toDate}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setJobData(response.data);
      setLoading(false);
    }
    fetchData();
  }, [pageSize, token, searchQuery, sortModel, fromDate, toDate]);

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

  function handleSortModelChange(event) {
    if (event.sortModel !== sortModel) {
      setSortModel(event.sortModel[event.sortModel.length - 1]);
    }
  }

  return (
    <div className={classes.root}>
      <div style={{ display: "flex", marginTop: 20 }}>
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
              textTransform: "capitalize",
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
        <SearchBar setSearchQuery={setSearchQuery} />
        <DatePicker
          fromDate={fromDate}
          toDate={toDate}
          setFromDate={setFromDate}
          setToDate={setToDate}
        />
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
        sortingMode="server"
        sortModel={sortModel ? [sortModel] : []}
        onSortModelChange={handleSortModelChange}
        hideFooter
        sortingOrder={["asc", "desc"]}
      />
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <Typography
          style={{
            textAlign: "end",
            color: "white",
            marginRight: 10,
            flexBasis: "100%",
            fontWeight: 600,
          }}
        >
          Page Size:
        </Typography>
        <ButtonGroup
          onClick={(event) => {
            setPageSize(Number(event.target.innerText));
          }}
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
          style={{
            float: "right",
            marginRight: "50px",
            marginTop: "15px",
          }}
        >
          {[50, 100, 300, 500].map((option, index) => (
            <Button
              key={index}
              style={{
                backgroundColor:
                  option === pageSize ? "rgb(159, 107, 203)" : "#7118be",
                borderColor: "white",
              }}
            >
              {option}
            </Button>
          ))}
        </ButtonGroup>
      </div>

      <Spinner loading={loading}></Spinner>
    </div>
  );
}
