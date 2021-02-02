import React from "react";
import "./About.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
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
      <section className="info">
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, nam
          labore? Ad eaque magnam, placeat deleniti quae reiciendis hic
          corporis, quisquam, architecto aliquid delectus eos modi incidunt
          quidem quo excepturi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sapiente consectetur aspernatur tempore deserunt,
          voluptate praesentium. Natus commodi rerum cupiditate facilis libero
          fugit cum ullam reprehenderit dolorum, repudiandae officiis ratione at
          impedit error expedita tenetur aspernatur quasi nostrum quidem nobis.
          Error aperiam ipsum illum, animi explicabo ipsam. Et, qui vero.
          Voluptatibus corrupti et excepturi nam, pariatur a praesentium, modi
          adipisci omnis doloribus reprehenderit consequatur earum sequi beatae
          facere distinctio illum velit repellendus! Adipisci, alias magnam esse
          error odit similique tenetur totam perspiciatis harum repudiandae
          dignissimos minima quo vel neque nesciunt quod labore sed a deleniti
          sint ea ut voluptatum voluptate. Earum. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Optio beatae delectus reiciendis tempore
          et sapiente recusandae accusamus ex quos est non deserunt, obcaecati
          voluptas quod quia laborum inventore aspernatur! Provident laboriosam,
          quibusdam debitis autem temporibus deleniti voluptatum, quod sint quas
          accusantium, officiis reiciendis molestias. Nam, aliquam blanditiis
          magni ducimus quisquam voluptatum nemo beatae voluptatem ratione
          dolorum et veritatis magnam animi rem. Dolorem deserunt iste natus
          commodi aliquid repellat consectetur et distinctio, eveniet nesciunt
          facere. Recusandae voluptate odit veniam modi eum ipsum distinctio
          assumenda reiciendis eaque ratione eligendi culpa, voluptatum
          molestiae fugit nobis totam hic laudantium ipsa! Impedit aliquam
          ratione natus?
        </p>
      </section>
    </div>
  );
};

export default About;
