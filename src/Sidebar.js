import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="./images/background.jpg" alt="background" />
        <Avatar className="sidebar__avatar" />
        <h2>Adrian Imioło</h2>
        <h4>adrian.imiolo@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">1,456</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">3,549</p>
        </div>

        <div className="sidebar__bottom">
          <p>Recent</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
