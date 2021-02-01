import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

const Home = () => {
  return (
    <section className="home">
      <h1 className="home__title">
        <Zoom delay={4000}>
          <span>T</span>
        </Zoom>
        <Zoom delay={4000}>
          <span>E</span>
        </Zoom>
        <Zoom delay={5000}>
          <span>S</span>
        </Zoom>
        <Zoom>
          <span>T</span>
        </Zoom>
        <Zoom delay={2000}>
          <span>P</span>
        </Zoom>
        <Zoom delay={1000}>
          <span>R</span>
        </Zoom>
        <Zoom delay={2000}>
          <span>O</span>
        </Zoom>
        <Zoom delay={5000}>
          <span>J</span>
        </Zoom>
        <Zoom delay={4000}>
          <span>E</span>
        </Zoom>
        <Zoom delay={5000}>
          <span>C</span>
        </Zoom>
        <Zoom>
          <span>T</span>
        </Zoom>
      </h1>
      <Link className="home__scroll" to="/about">
        scroll
      </Link>
    </section>
  );
};

export default Home;
