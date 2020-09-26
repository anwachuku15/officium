import { ArrowForwardIosRounded } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./LetsWork.css";

const LetsWork = () => {
  return (
    <div className="letsWork__container">
      <div className="letsWork__contentContainer">
        <div className="letsWork__contentHeaderContainer">
          <div className="letsWork__contentHeaderDiv">
            <div className="letsWork__contentHeaderText">
              <h2>Let's Work Together</h2>
            </div>
          </div>
        </div>
        <div className="letsWork__contentButtonWrapper">
          <div className="letsWork__contentButtonDiv">
            <div className="getInTouchButton">
              <Link to="/contact" className="getInTouchLink">
                <span>GET IN TOUCH</span>
              </Link>
              <div className="getInTouchLink__arrow">
                <ArrowForwardIosRounded fontSize="small" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsWork;
