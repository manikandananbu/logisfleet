import React from "react";
import moment from "moment";

import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import MobileDateRangePicker from "@material-ui/lab/MobileDateRangePicker";

import InputComponent from "./InputComponent";

export default function ResponsiveDateRangePicker({
  fromDate,
  toDate,
  setFromDate,
  setToDate,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDateRangePicker
        style={{
          alignItems: "end",
        }}
        value={[fromDate || null, toDate || null]}
        onChange={() => {}}
        onAccept={([startDate, endDate]) => {
          if (startDate && endDate) {
            setFromDate(moment(startDate).format("YYYY-MM-DD"));
            setToDate(moment(endDate).format("YYYY-MM-DD"));
          }
        }}
        renderInput={(startProps, endProps) => (
          <InputComponent
            endProps={endProps}
            setFromDate={setFromDate}
            setToDate={setToDate}
            startProps={startProps}
          />
        )}
      />
    </LocalizationProvider>
  );
}
