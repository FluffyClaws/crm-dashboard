import React from "react";
import TablePagination from "@mui/material/TablePagination";
import Pagination from "@mui/material/Pagination";
import { PaginationProps } from "../types/types";
import "./Pagination.scss";

const CustomPagination: React.FC<PaginationProps> = ({
  count,
  page,
  onPageChange,
}) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onPageChange(event, value - 1);
  };

  const rowsPerPage = 8;
  const numberOfPages = Math.ceil(count / rowsPerPage);

  return (
    <div className="paginationContainer">
      <TablePagination
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onPageChange}
        rowsPerPageOptions={[]}
        labelDisplayedRows={({ from, to, count }) =>
          `Showing data ${from} to ${to} of ${count} entries`
        }
        ActionsComponent={() => null}
      />
      <Pagination
        count={numberOfPages}
        page={page + 1}
        onChange={handleChange}
      />
    </div>
  );
};

export default CustomPagination;
