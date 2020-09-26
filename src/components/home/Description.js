import React from "react";
import "./Description.css";

const Description = () => {
  return (
    <div className="description__container">
      <div className="description__header">
        <h1>We make clinical trials more successful</h1>
      </div>
      <div className="description__grid">
        <div className="description__gridHeader">
          <h1>Services</h1>
        </div>
        <div className="description__gridContainer">
          <div className="description__gridItem">
            <h1>Hello</h1>
          </div>
          <div className="description__gridItem">
            <h1>Hello</h1>
          </div>
          <div className="description__gridItemLast">
            <h1>Hello</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
