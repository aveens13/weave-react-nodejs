import React from "react";
import { Link } from "react-router-dom";
import "./topnav.css";
import {
  AccountCircle,
  NotificationAddOutlined,
  SearchOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

function TopNav() {
  return (
    <div className="top_nav">
      <div className="box">
        <SearchOutlined id="search_icon" />
        <input type="text" id="search" placeholder="Search" />
      </div>

      <div className="icons">
        <a href="#">
          <NotificationAddOutlined className="top_nav_icon" fontSize="medium" />
        </a>
        <a href="#">
          <SettingsOutlined className="top_nav_icon" fontSize="medium" />
        </a>
        <Link to="/profile">
          <AccountCircle className="top_nav_icon" fontSize="medium" />
        </Link>
      </div>
    </div>
  );
}

export default TopNav;
