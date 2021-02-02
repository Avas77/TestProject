import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

const Home = () => {
  return (
    // <section className="home">
    //   <div class="zoomoutheader">
    //     <h1 className="home__title">TEST PROJECT</h1>
    //     <Link className="home__scroll" to="/about">
    //       scroll
    //     </Link>
    //   </div>
    // </section>

    <div class="header-wrapper">
      <h1 class="home__title">TEST PROJECT</h1>
      <Link className="home__scroll" to="/about">
        scroll
      </Link>
      <div class="zoominheader">
        <div class="zoomoutheader"></div>
      </div>
    </div>
  );
};

export default Home;
