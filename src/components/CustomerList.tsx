import React, { useState } from "react";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { CustomerListProps } from "../types/types";
import "./CustomerList.scss";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import GreetingsIcon from "../icons/greetings.svg";
import Pagination from "./Pagination";
import useSearch from "../hooks/useSearch";

const CustomerList: React.FC<CustomerListProps> = ({ customers }) => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 8;
  const searchKeys = ["name", "email", "phone", "company"];

  const { searchTerm, setSearchTerm, filteredItems } = useSearch(
    customers,
    searchKeys
  );

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container className="container">
      <Box className="greetings">
        Hello Evano
        <img src={GreetingsIcon} alt="greetings" className="icon" />,
      </Box>

      <TableContainer className="table-container">
        <Box className="table-header">
          <span className="wrapper">
            <Typography className="table-title">All Customers</Typography>
            <Typography className="table-status">Active Members</Typography>
          </span>
          <TextField
            id="search-customers"
            className="search-customers"
            type="search"
            value={searchTerm}
            onChange={handleSearchChange}
            variant="outlined"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer Name</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredItems
              .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
              .map((customer) => (
                <TableRow>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.company}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.country}</TableCell>
                  <TableCell>
                    <span
                      className={
                        customer.status === "Active"
                          ? "status active"
                          : "status inactive"
                      }
                    >
                      {customer.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>{" "}
        <div className="pagination-container">
          <Pagination
            count={customers.length}
            page={page}
            onPageChange={handleChangePage}
          />
        </div>
      </TableContainer>
    </Container>
  );
};

export default CustomerList;
