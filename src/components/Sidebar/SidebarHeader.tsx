import { Box, Typography } from "@mui/material";
import React from "react";
import { SidebarHeaderProps } from "../../types/types";
import MenuIcon from "@mui/icons-material/Menu";
import LogoIcon from "../../icons/logo.svg";
import "./SidebarHeader.scss";

const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  isSidebarOpen,
  isMobile,
  toggleSidebar,
}) => (
  <Box className="sidebar-header" onClick={toggleSidebar}>
    {isMobile && isSidebarOpen ? (
      <MenuIcon />
    ) : (
      <img src={LogoIcon} alt="Logo" className="sidebar-logo" />
    )}
    <Typography className="sidebar-title">
      Dashboard
      <span className="sidebar-version">v0.1</span>
    </Typography>
  </Box>
);

export default SidebarHeader;
