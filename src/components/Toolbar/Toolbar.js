import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./Toolbar.css";

const Toolbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="Toolbar">
      <Navbar clicked={() => setShow(!show)} className="nav" />
      <Sidebar show={show} className="side" />
    </div>
  );
};

export default Toolbar;
