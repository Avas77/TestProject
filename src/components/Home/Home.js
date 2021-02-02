import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

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
      <h1 class="home__title">
        <Fade left delay={1000}>
          <span>T</span>
        </Fade>
        <Fade left delay={2000}>
        <span>E</span>
        </Fade>
        <Fade left delay={1000}>
        <span>S</span>
        </Fade >
          <Fade left delay={1000}>
          <span>T</span>
          </Fade>
          <Fade delay={2000}><span>P</span></Fade>
         <Fade delay={1000}><span>R</span></Fade>
         <Fade delay={1000}><span>O</span></Fade>
         <Fade delay={2000}><span>J</span></Fade>
         <Fade delay={1000}><span>E</span></Fade>
         <Fade delay={2000}><span>C</span></Fade>
         <Fade delay={1000}><span>T</span></Fade>
      </h1>
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
