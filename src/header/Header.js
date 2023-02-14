import React, { useState } from "react";
import "./Header.css";
import AppsIcon from "@mui/icons-material/Apps";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Popup from "./Popup";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  const [yourwork, setYourwork] = useState();
  return (
    <div className="body">
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div>
          <AppsIcon />
        </div>
        <i style={{ fontSize: "24px", color: "blue" }} className="fab">
          &#xf7b1;
        </i>
        <>Jira Software</>
        <button className="button" onClick={() => setYourwork(true)}>
          Your work <ExpandMoreIcon className="more-icon"/>
        </button>
        {yourwork ? <Popup /> : null}
        <button className="button">
          Project <ExpandMoreIcon />
        </button>
        <button className="button">
          Filters <ExpandMoreIcon />
        </button>
        <button className="button">
          Dashboard <ExpandMoreIcon />
        </button>
        <button className="button">
          People <ExpandMoreIcon />
        </button>
        <button className="button">
          App <ExpandMoreIcon />
        </button>
        <button className="bgcolor">Create</button>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <div className="search-container">
          <SearchIcon className="search-icon" />
          <input type="name" placeholder="Search" />
        </div>
        <NotificationsIcon className="notify" />
        <HelpIcon className="help" />
        <SettingsIcon className="setting" />
        <AccountCircleIcon className="havatar" />
      </div>
    </div>
  );
};

export default Header;
