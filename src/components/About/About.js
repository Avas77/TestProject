import React from "react";
import "./About.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <Sidebar />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, ab.
        Nostrum doloribus vel cupiditate mollitia, optio neque! Accusamus,
        tempora? Reprehenderit excepturi iure unde eligendi quod? Sit excepturi
        blanditiis enim expedita. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Modi, expedita? Nisi et, atque iusto porro id
        consequuntur. Ex ratione aut repellat sint animi porro, quisquam
        consectetur sed pariatur consequuntur nihil, omnis, sit voluptatum.
        Animi reiciendis error, maiores amet tenetur voluptatem!
      </p>
    </div>
  );
};

export default About;
