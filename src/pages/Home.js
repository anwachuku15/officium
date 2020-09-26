import React from "react";
// import { Link } from "react-router-dom";
import "./Home.css";
import Carousel from "../components/home/Carousel1";
import Description from "../components/home/Description1";
import Clients from "../components/home/Clients";
import Mission from "../components/home/Mission";
import Testimonials from "../components/home/Testimonials";
import ContactSection from "../components/home/ContactSection";
const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <Description />
      <Clients />
      <Mission />
      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default Home;
