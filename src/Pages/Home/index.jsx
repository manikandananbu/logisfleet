import React, { useLayoutEffect, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

// components
import DatePicker from "../../Components/DatePicker";
import SearchBar from "../../Components/SearchBar";
import Spinner from "../../Components/Spinner";
import DataGrid from "../../Components/DataGrid";
import Header from "../../Components/Header";
import Logout from "../../Components/Logout";
import Pagination from "../../Components/Pagination";

import useStyles from "./styles";

export default function OrderSortingGrid() {
  const [loading, setLoading] = useState(false);
  const [jobData, setJobData] = useState();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortModel, setSortModel] = useState();
  const [fromDate, setFromDate] = useState(
    moment().startOf("month").format("YYYY-MM-DD")
  );
  const [toDate, setToDate] = useState(
    moment().endOf("month").format("YYYY-MM-DD")
  );

  const token = localStorage.getItem("logisfleet_token");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      await axios
        .get(
          `https://test-api.logisfleet.com/job?currentPage=${page}&pageSize=${pageSize}&searchQuery=${searchQuery}&sortColumn=${
            sortModel?.field || ""
          }&sortDir=${
            sortModel?.sort || ""
          }&fromDate=${fromDate}&toDate=${toDate}`,
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((res) => {
          setJobData(res.data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
    fetchData();
  }, [pageSize, page, token, searchQuery, sortModel, fromDate, toDate]);

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

  return (
    <div className={classes.gridContainer}>
      <div className={classes.headerContainer}>
        <Header />
        <Logout />
      </div>
      <div className={classes.filterBar}>
        <SearchBar setSearchQuery={setSearchQuery} />
        <DatePicker
          fromDate={fromDate}
          toDate={toDate}
          setFromDate={setFromDate}
          setToDate={setToDate}
        />
      </div>
      <DataGrid
        jobData={jobData}
        setSortModel={setSortModel}
        sortModel={sortModel}
      />
      <Pagination
        page={page}
        pageSize={pageSize}
        setPage={setPage}
        setPageSize={setPageSize}
        totalRecords={jobData?.total || 0}
      />
      <Spinner loading={loading}></Spinner>
    </div>
  );
}
