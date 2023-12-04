import React from "react";
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
    <aside>
      <div className="sidebar-header">
        <img src={LogoIcon} alt="Logo" />
        <h1>Dashboard</h1>
        <span>v0.1</span>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li className="nav-item">
            <img src={DashboardIcon} alt="Dashboard" />
            <span className="text">Dashboard</span>
            <img src={ArrowIcon} alt="Arrow-right" />
          </li>
          <li className="nav-item">
            <img src={CustomerIcon} alt="Customer" />
            <span className="text">Customers</span>
            <img src={ArrowIcon} alt="Arrow-right" />
          </li>
          <li className="nav-item">
            <img src={IncomeIcon} alt="Income" />
            <span className="text">Income</span>
            <img src={ArrowIcon} alt="Arrow-right" />
          </li>
          <li className="nav-item">
            <img src={PromoteIcon} alt="Promote" />
            <span className="text">Promote</span>
            <img src={ArrowIcon} alt="Arrow-right" />
          </li>
          <li className="nav-item">
            <img src={HelpIcon} alt="Help" />
            <span className="text">Help</span>
            <img src={ArrowIcon} alt="Arrow-right" />
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <div className="user-profile">
          <img src={UserIcon} alt="Evano" />{" "}
          <div className="user-info">
            <strong>Evano</strong>
            <small>Project Manager</small>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
