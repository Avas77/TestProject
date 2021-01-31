import React from "react";
import "./Navbar.css";
import Slide from "react-reveal/Slide";

const Navbar = () => {
  return (
    <Slide top>
      <div className="navbar">
        <span>Menu</span>
        <a className="navbar__brand" href="/">
          TEST PROJECT
        </a>
        <span>Search</span>
      </div>
    </Slide>
  );
};

export default Navbar;
