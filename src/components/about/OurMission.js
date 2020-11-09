import React from "react";
import "./OurMission.css";

const OurMission = () => {
  return (
    <div className="ourMission__container">
      <div className="ourMission__div">
        <div className="ourMission__imageContainer">
          <div className="ourMission__imageDiv">
            <img src={require("../../assets/img/about/mission.jpg")} alt="" />
          </div>
        </div>
        <div className="ourMission__contentContainer">
          <div className="ourMission__contentHeaderContainer">
            <h2>Our Mission</h2>
          </div>
          <div className="ourMission__contentDivider"></div>
          <div className="ourMission__content1Container">
            <h3>Create</h3>
            <p>
              Pellentesque eu tincidunt tortor aliquam nulla. Dictum at tempor
              commodo
            </p>
          </div>
          <div className="ourMission__content1Container">
            <h3>Strengthen</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
              ultricies mi quis.
            </p>
          </div>
          <div className="ourMission__content3Container">
            <h3>Lead</h3>
            <p>
              Dignissim suspendisse in est ante in nibh mauris cursus mattis.
              Vitae sapien pellentesque habitant morbi tristique
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
