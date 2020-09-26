import React from "react";
import "./About.css";
import AboutUs from "../components/about/AboutUs";
import Overview from "../components/about/Overview";
import OurSectors from "../components/about/OurSectors";
import OurMission from "../components/about/OurMission";
import Values from "../components/about/Values";
import OurClients from "../components/about/OurClients";
import LetsWork from "../components/about/LetsWork";

const About = () => {
  return (
    <div className="about">
      <AboutUs />
      <Overview />
      <OurSectors />
      <OurMission />
      <Values />
      <OurClients />
      <LetsWork />
    </div>
  );
};

export default About;
