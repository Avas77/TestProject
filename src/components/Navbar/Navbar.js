import React from "react";
import "./Navbar.css";
import Slide from "react-reveal/Slide";

const Navbar = (props) => {
  return (
    <Slide top>
      <div className="navbar">
        <span onClick={props.clicked} className="menu-toggle">
          <i class="fas fa-bars"></i>Menu
        </span>
        <a className="navbar__brand" href="/">
          TEST PROJECT
        </a>
        <span>
          <i class="fas fa-search"></i>Search
        </span>
      </div>
    </Slide>
  );
};

export default Navbar;
