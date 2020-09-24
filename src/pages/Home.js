import React from "react";
// import { Link } from "react-router-dom";
import "./Home.css";
import Carousel from "../components/Carousel";
import Carousel1 from "../components/Carousel1";

const Home = () => {
  return (
    <div className="home" onScroll={(e) => console.log(e.target.scrollTop)}>
      <Carousel1 />
    </div>
  );
};

export default Home;
