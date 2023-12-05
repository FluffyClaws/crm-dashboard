import React from "react";
import { Typography, Avatar, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

import LogoIcon from "../icons/logo.svg";
import UserIcon from "../icons/user-pic.svg";
import ArrowIcon from "../iconComponents/ArrowIcon";
import CustomerIcon from "../iconComponents/CustomersIcon";
import DashboardIcon from "../iconComponents/DashboardIcon";
import IncomeIcon from "../iconComponents/IncomeIcon";
import PromoteIcon from "../iconComponents/PromoteIcon";
import HelpIcon from "../iconComponents/HelpIcon";

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
      <Box component="nav" className="sidebar-nav">
        <Link to="/dashboard" className="nav-item">
          <span>
            <DashboardIcon className="icon-dashboard" />
            Dashboard
          </span>
        </Link>
        <Link to="/customers" className="nav-item">
          <span>
            <CustomerIcon className="icon-customer" />
            Customers
          </span>
          <ArrowIcon className="icon-arrow" />
        </Link>
        <Link to="/income" className="nav-item">
          <span>
            <IncomeIcon className="icon-income" />
            Income
          </span>
          <ArrowIcon className="icon-arrow" />
        </Link>
        <Link to="/promote" className="nav-item">
          <span>
            <PromoteIcon className="icon-promote" />
            Promote
          </span>
          <ArrowIcon className="icon-arrow" />
        </Link>
        <Link to="/help" className="nav-item">
          <span>
            <HelpIcon className="icon-help" />
            Help
          </span>
          <ArrowIcon className="icon-arrow" />
        </Link>
      </Box>
      <Box className="sidebar-footer">
        <Avatar src={UserIcon} alt="Evano" className="user-avatar" />
        <span className="wrapper">
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
