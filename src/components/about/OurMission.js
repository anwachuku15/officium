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
              Create efficient and effective processes that meets our clients
              needs
            </p>
          </div>
          <div className="ourMission__content1Container">
            <h3>Strengthen</h3>
            <p>
              Strengthen efforts that advance the creation of products and
              services that prevent disease, increase literacy, and eliminates
              health disparities
            </p>
          </div>
          <div className="ourMission__content3Container">
            <h3>Lead</h3>
            <p>
              Lead with intention. Aim to make complex systems and processes
              simple and guide with strength
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
