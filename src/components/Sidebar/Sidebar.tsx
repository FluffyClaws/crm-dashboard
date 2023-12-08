import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import "./Sidebar.scss";
import SidebarHeader from "./SidebarHeader";
import SidebarItem, { sidebarItems } from "./SidebarItems";
import SidebarFooter from "./SidebarFooter";

const Sidebar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box
      component="aside"
      className={`sidebar ${isSidebarOpen || isMobile ? "open" : ""}`}
    >
      <SidebarHeader
        isSidebarOpen={isSidebarOpen}
        isMobile={isMobile}
        toggleSidebar={toggleSidebar}
      />
      {isSidebarOpen || !isMobile ? (
        <>
          <Box component="nav" className="sidebar-nav">
            {sidebarItems.map((item) => (
              <SidebarItem key={item.to} {...item} />
            ))}
          </Box>
          <SidebarFooter />
        </>
      ) : null}
    </Box>
  );
};

export default Sidebar;
