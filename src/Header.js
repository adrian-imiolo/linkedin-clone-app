import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://img.icons8.com/color/96/null/linkedin.png"
          alt="Linkedin Icon"
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        
      </div>
    </div>
  );
}

export default Header;
