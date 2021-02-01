import React from "react";
import "./About.css";
import Toolbar from "../Toolbar/Toolbar";

const About = () => {
  return (
    <div className="about">
      <Toolbar />
      <h1>About Us</h1>
      <section className="info">
        <div className="first">
          <span className="highlighted">2003</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            inventore quam omnis ab modi maiores ipsa animi quos eum libero,
            vitae, ut et doloribus possimus tempora facilis maxime molestiae
            nobis.
          </p>
        </div>
        <div className="first">
          <span className="highlighted">150+</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            inventore quam omnis ab modi maiores ipsa animi quos eum libero,
            vitae, ut et doloribus possimus tempora facilis maxime molestiae
            nobis.
          </p>
        </div>
        <div className="first">
          <span className="highlighted">Service</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            inventore quam omnis ab modi maiores ipsa animi quos eum libero,
            vitae, ut et doloribus possimus tempora facilis maxime molestiae
            nobis.
          </p>
        </div>
      </section>
      <p className="desc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, nam
        labore? Ad eaque magnam, placeat deleniti quae reiciendis hic corporis,
        quisquam, architecto aliquid delectus eos modi incidunt quidem quo
        excepturi.
      </p>
    </div>
  );
};

export default About;
