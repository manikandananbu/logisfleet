import React from "react";
import moment from "moment";
import { XGrid } from "@material-ui/x-grid";

import columns from "./columns";
import useStyles from "./styles";

const DATE_FORMAT = "MM/DD/YYYY";
const TIME_FORMAT = "HH:MM:SS";

export default function DataGrid({ jobData, setSortModel, sortModel }) {
  const classes = useStyles();

  function handleSortModelChange(event) {
    if (event.sortModel !== sortModel) {
      setSortModel(event.sortModel[event.sortModel.length - 1]);
    }
  }

  function generateRowData() {
    return (jobData?.data || []).map((data) => ({
      ...data,
      id: data.jobId,
      actualJobTimeSpecific: moment(data.actualJobTimeSpecific).format(
        TIME_FORMAT
      ),
      jobAttemptCompletedDate: moment(data.jobAttemptCompletedDate).format(
        DATE_FORMAT
      ),
      jobDate: moment(data.jobDate).format(DATE_FORMAT),
      inProgressTime: moment(data.inProgressTime).format(TIME_FORMAT),
      jobTimeFrom: moment(data.jobTimeFrom).format(TIME_FORMAT),
      jobTimeSpecific: moment(data.jobTimeSpecific).format(TIME_FORMAT),
      jobTimeTo: moment(data.jobTimeTo).format(TIME_FORMAT),
    }));
  }

  return (
    <XGrid
      className={classes.dataGrid}
      columns={columns}
      disableColumnMenu
      hideFooter
      hideFooterPagination
      onSortModelChange={handleSortModelChange}
      rows={generateRowData()}
      sortingMode="server"
      sortModel={sortModel ? [sortModel] : []}
      sortingOrder={["asc", "desc"]}
    />
  );
}
