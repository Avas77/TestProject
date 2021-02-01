import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <nav className={`sidebar clearfix ${props.show ? "open" : "close"}`}>
      <ul>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/link1">Link 1</Link>
        </li>
        <li>
          <Link to="/link2">Link 2</Link>
        </li>
        <li>
          <Link to="/link3">Link 3</Link>
        </li>
        <li>
          <Link to="/link4">Link 4</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
