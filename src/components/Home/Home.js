import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

const Home = () => {
  return (
    <section className="home">
      <h1 className="home__title">
        <Zoom delay={1000}>TEST PROJECT</Zoom>
      </h1>
      <Link className="home__scroll" to="/about">
        scroll
      </Link>
    </section>
  );
};

export default Home;
