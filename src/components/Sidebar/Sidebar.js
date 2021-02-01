import React from "react";
import "./Sidebar.css";
import Slide from "react-reveal/Slide";

const Sidebar = () => {
  return (
    <Slide left>
      <nav className="sidebar">
        <ul>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/link1">Link 1</a>
          </li>
          <li>
            <a href="/link2">Link 2</a>
          </li>
          <li>
            <a href="/link3">Link 3</a>
          </li>
          <li>
            <a href="/link4">Link 4</a>
          </li>
        </ul>
      </nav>
    </Slide>
  );
};

export default Sidebar;
