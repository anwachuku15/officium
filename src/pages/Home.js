import React from "react";
// import { Link } from "react-router-dom";
import "./Home.css";
import Carousel from "../components/Carousel1";
import Description from "../components/Description1";
import Clients from "../components/Clients";
import Mission from "../components/Mission";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
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
