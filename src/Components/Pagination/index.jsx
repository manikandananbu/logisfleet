import React from "react";
import { Pagination as MuiPagination } from "@material-ui/lab";
import { Box, Typography } from "@material-ui/core";

import ButtonGroup from "./ButtonGroup";
import useStyles from "./styles";

export default function Pagination({
  page,
  pageSize,
  setPage,
  setPageSize,
  totalRecords,
}) {
  const classes = useStyles();

  function handleOnPageChange(event, selectedPage) {
    setPage(selectedPage);
  }

  return (
    <Box alignItems="baseline" display="flex" mx={6.25} my={0}>
      <Typography>Page:</Typography>
      <MuiPagination
        count={Math.ceil(totalRecords / pageSize)}
        onChange={handleOnPageChange}
        page={page}
      />
      <div className={classes.container}>
        <Typography classes={{ root: classes.typography }}>
          Page Size:
        </Typography>
        <ButtonGroup
          page={page}
          pageSize={pageSize}
          setPage={setPage}
          setPageSize={setPageSize}
          totalRecords={totalRecords}
        />
        <Typography classes={{ root: classes.recordTypography }}>
          {`Showing ${(page - 1) * pageSize || 1} - ${
            page * pageSize > totalRecords ? totalRecords : page * pageSize
          } of ${totalRecords}`}
        </Typography>
      </div>
    </Box>
  );
}
