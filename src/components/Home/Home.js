import React, {Component} from "react";
import "./Home.css";
import { Link, useHistory} from "react-router-dom";
import Fade from "react-reveal/Fade";

class Home extends Component{
 componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
}
componentWillUnmount() {
   window.removeEventListener('scroll', this.handleScroll);
}
handleScroll = () => {
  if(document.body.scrollTop > 60 || document.documentElement.scrollTop > 60){
    this.props.history.push("/about");
  }
}
  render(){
    return (
    <div class="header-wrapper" id="myDIV">
      <h1 class="home__title">
        <Fade left delay={1000}>
          <span>T</span>
        </Fade>
        <Fade left delay={2000}>
          <span>E</span>
        </Fade>
        <Fade left delay={1000}>
          <span>S</span>
        </Fade>
        <Fade left delay={1000}>
          <span>T</span>
        </Fade>
        <Fade delay={2000}>
          <span>P</span>
        </Fade>
        <Fade delay={1000}>
          <span>R</span>
        </Fade>
        <Fade delay={1000}>
          <span>O</span>
        </Fade>
        <Fade delay={2000}>
          <span>J</span>
        </Fade>
        <Fade delay={1000}>
          <span>E</span>
        </Fade>
        <Fade delay={2000}>
          <span>C</span>
        </Fade>
        <Fade delay={1000}>
          <span>T</span>
        </Fade>
      </h1>
      <Link className="home__scroll" to="/about">
        scroll
      </Link>
      <div class="zoominheader">
        <div class="zoomoutheader"></div>
      </div>
    </div>
  );
  }
};

export default Home;
