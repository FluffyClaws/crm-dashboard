import React from "react";
import { Link } from "react-router-dom";
import ArrowIcon from "../../iconComponents/ArrowIcon";
import DashboardIcon from "../../iconComponents/DashboardIcon";
import HelpIcon from "../../iconComponents/HelpIcon";
import IncomeIcon from "../../iconComponents/IncomeIcon";
import ProductIcon from "../../iconComponents/ProductIcon";
import PromoteIcon from "../../iconComponents/PromoteIcon";
import { SidebarItemType } from "../../types/types";
import CustomerIcon from "../../iconComponents/CustomersIcon";
import "./SidebarItems.scss";

export const sidebarItems: SidebarItemType[] = [
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

export const SidebarItem: React.FC<SidebarItemType> = ({
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

export default SidebarItem;
