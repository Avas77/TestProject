import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Toolbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Navbar clicked={() => setShow(!show)} />
      <Sidebar show={show} />
    </div>
  );
};

export default Toolbar;
