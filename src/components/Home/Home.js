import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <h1 className="home__title">TEST PROJECT</h1>
      <Link className="home__scroll" to="/about">
        scroll
      </Link>
    </section>
  );
};

export default Home;
