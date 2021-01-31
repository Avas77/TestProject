import React from "react";
import "./Sidebar.css";
import Slide from "react-reveal/Slide";

const Sidebar = () => {
  return (
    <Slide left>
      <nav className="sidebar">
        <ul>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Link 1</a>
          </li>
          <li>
            <a href="">Link 2</a>
          </li>
          <li>
            <a href="">Link 3</a>
          </li>
          <li>
            <a href="">Link 4</a>
          </li>
        </ul>
      </nav>
    </Slide>
  );
};

export default Sidebar;
