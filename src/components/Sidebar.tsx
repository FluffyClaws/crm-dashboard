import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Avatar,
  Box,
} from "@mui/material";
import "./Sidebar.scss";

import DashboardIcon from "../icons/dashboard.svg";
import CustomerIcon from "../icons/customer.svg";
import IncomeIcon from "../icons/income.svg";
import PromoteIcon from "../icons/promote.svg";
import HelpIcon from "../icons/help.svg";
import ArrowIcon from "../icons/arrow-right.svg";
import LogoIcon from "../icons/logo.svg";
import UserIcon from "../icons/user-pic.svg";

const Sidebar: React.FC = () => {
  return (
    <Box component="aside" className="sidebar">
      <Box className="sidebar-header">
        <img src={LogoIcon} alt="Logo" className="sidebar-logo" />
        <Typography className="sidebar-title">
          Dashboard
          <span className="sidebar-version">v0.1</span>
        </Typography>
      </Box>
      <List component="nav" className="sidebar-nav">
        <ListItem button className="nav-item">
          <img src={DashboardIcon} alt="Dashboard" className="icon-dashboard" />
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button className="nav-item">
          <img src={CustomerIcon} alt="Customer" className="icon-customer" />
          <ListItemText primary="Customers" />
          <img src={ArrowIcon} alt="Arrow-right" className="icon-arrow" />
        </ListItem>
        <ListItem button className="nav-item">
          <img src={IncomeIcon} alt="Income" className="icon-income" />
          <ListItemText primary="Income" />
          <img src={ArrowIcon} alt="Arrow-right" className="icon-arrow" />
        </ListItem>
        <ListItem button className="nav-item">
          <img src={PromoteIcon} alt="Promote" className="icon-promote" />
          <ListItemText primary="Promote" />
          <img src={ArrowIcon} alt="Arrow-right" className="icon-arrow" />
        </ListItem>
        <ListItem button className="nav-item">
          <img src={HelpIcon} alt="Help" className="icon-help" />
          <ListItemText primary="Help" />
          <img src={ArrowIcon} alt="Arrow-right" className="icon-arrow" />
        </ListItem>
      </List>
      <Box className="sidebar-footer">
        <Avatar src={UserIcon} alt="Evano" className="user-avatar" />
        <span className=" wrapper">
          <Typography className="user-name">Evano</Typography>
          <Typography color="text.secondary" className="user-title">
            Project Manager
          </Typography>
        </span>
      </Box>
    </Box>
  );
};

export default Sidebar;
