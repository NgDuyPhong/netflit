import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import React, { useState } from "react";
import "./navbar.scss";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset !== 0);
  };
  console.log(isScrolled);

  return (
    <div className={`navbar${isScrolled ? " scrolled" : ""}`}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
            alt="logo"
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon-navbar" />
          <span>Kid</span>
          <Notifications className="icon-navbar" />
          <img
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=500"
            alt="user-avatar"
          />
          <div className="profile">
            <ArrowDropDown className="icon-navbar" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
