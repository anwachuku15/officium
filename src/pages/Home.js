import React from "react";
// import { Link } from "react-router-dom";
import "./Home.css";
import Carousel from "../components/Carousel1";
import Description from "../components/Description1";
import Clients from "../components/Clients";
import Mission from "../components/Mission";

const Home = () => {
  return (
    <div className="home" onScroll={(e) => console.log(e.target.scrollTop)}>
      <Carousel />

      {/* SERVICES COMPONENT */}
      <Description />
      {/* CLIENTS COMPONENT */}
      <Clients />
      {/* DIVIDER */}
      {/* <div className="divider__container">

      </div> */}
      {/* COMPANY MISSION */}
      <Mission />
      {/* TESTIMONIALS */}

      {/* MESSAGE */}
    </div>
  );
};

export default Home;
