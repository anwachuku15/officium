import React from "react";
// import { Link } from "react-router-dom";
import "./Home.css";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div className="home" onScroll={(e) => console.log(e.target.scrollTop)}>
      <Carousel />
    </div>
  );
};

export default Home;
