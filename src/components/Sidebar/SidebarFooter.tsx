import { Box, Typography, Avatar } from "@mui/material";
import React from "react";
import UserIcon from "../../icons/user-pic.svg";
import "./SidebarFooter.scss";

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

export default SidebarFooter;
