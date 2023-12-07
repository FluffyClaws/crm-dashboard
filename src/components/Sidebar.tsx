import React, { useState } from "react";
import { Typography, Avatar, Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

import LogoIcon from "../icons/logo.svg";
import UserIcon from "../icons/user-pic.svg";
import ArrowIcon from "../iconComponents/ArrowIcon";
import DashboardIcon from "../iconComponents/DashboardIcon";
import ProductIcon from "../iconComponents/ProductIcon";
import CustomerIcon from "../iconComponents/CustomersIcon";
import IncomeIcon from "../iconComponents/IncomeIcon";
import PromoteIcon from "../iconComponents/PromoteIcon";
import HelpIcon from "../iconComponents/HelpIcon";
import { SidebarItemType } from "../types/types";
import MenuIcon from "@mui/icons-material/Menu";

const sidebarItems: SidebarItemType[] = [
  {
    to: "/dashboard",
    icon: DashboardIcon,
    text: "Dashboard",
    showArrow: false,
  },
  { to: "/product", icon: ProductIcon, text: "Product", showArrow: true },
  { to: "/customers", icon: CustomerIcon, text: "Customers", showArrow: true },
  { to: "/income", icon: IncomeIcon, text: "Income", showArrow: true },
  { to: "/promote", icon: PromoteIcon, text: "Promote", showArrow: true },
  { to: "/help", icon: HelpIcon, text: "Help", showArrow: true },
];

const SidebarItem: React.FC<SidebarItemType> = ({
  to,
  icon: Icon,
  text,
  showArrow = false,
}) => (
  <Link to={to} className="nav-item">
    <span>
      <Icon className={`icon-${text.toLowerCase()}`} />
      {text}
    </span>
    {showArrow && <ArrowIcon className="icon-arrow" />}
  </Link>
);

const SidebarFooter: React.FC = () => (
  <Box className="sidebar-footer">
    <Avatar src={UserIcon} alt="Evano" className="user-avatar" />
    <span className="wrapper">
      <Typography className="user-name">Evano</Typography>
      <Typography color="text.secondary" className="user-title">
        Project Manager
      </Typography>
    </span>
  </Box>
);

const Sidebar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      {!isSidebarOpen && (
        <IconButton
          className="sidebar-logo-button"
          onClick={toggleSidebar}
          aria-label="open sidebar"
        >
          <img src={LogoIcon} alt="Logo" />
        </IconButton>
      )}
      <Box
        component="aside"
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
      >
        <Box className="sidebar-header" onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <MenuIcon />
          ) : (
            <img src={LogoIcon} alt="Logo" className="sidebar-logo" />
          )}
          <Typography className="sidebar-title">
            Dashboard
            <span className="sidebar-version">v0.1</span>
          </Typography>
        </Box>
        <Box component="nav" className="sidebar-nav">
          {sidebarItems.map((item) => (
            <SidebarItem key={item.to} {...item} />
          ))}
        </Box>
        <SidebarFooter />
      </Box>
    </>
  );
};

export default Sidebar;
