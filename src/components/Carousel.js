import React from "react";
import "./Carousel.css";
import { Link } from "react-router-dom";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

import Slider from "react-slick";
import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel__item carousel__solutions fade">
        <div className="slide__arrowBack">
          <ArrowBackIos fontSize="large" onClick={() => {}} />
        </div>
        <div className="item__wrapper">
          <h1 className="carousel__title">Solutions</h1>
          <p className="carousel__subtitle">
            An Innovative Understanding and Evaluation of Science Company
          </p>
          <div className="buttonWrapper">
            <Link to="/services" className="carousel__link">
              <span>More Information</span>
            </Link>
            <div className="link__arrowForward">
              <ArrowForwardIos fontSize="small" />
            </div>
          </div>
        </div>
        <div className="slide__arrowForward">
          <ArrowForwardIos fontSize="large" />
        </div>
      </div>

      <div className="carousel__item carousel__clinicaldev fade">
        <div className="slide__arrowBack">
          <ArrowBackIos fontSize="large" />
        </div>
        <div className="item__wrapper">
          <h1 className="carousel__title">Clinical Development</h1>
          <p className="carousel__subtitle">
            With our research services and diverse therapeutic expertise we
            enhance your capacity and minimize risk
          </p>
          <div className="buttonWrapper">
            <Link to="/services" className="carousel__link">
              <span>More Information</span>
            </Link>
            <div className="link__arrowForward">
              <ArrowForwardIos fontSize="small" />
            </div>
          </div>
        </div>
        <div className="slide__arrowForward">
          <ArrowForwardIos fontSize="large" />
        </div>
      </div>

      <div className="carousel__item carousel__education fade">
        <div className="slide__arrowBack">
          <ArrowBackIos fontSize="large" />
        </div>
        <div className="item__wrapper">
          <h1 className="carousel__title">Education</h1>
          <p className="carousel__subtitle">
            Achieve more with our talented team of education researchers and
            analysts
          </p>
          <div className="buttonWrapper">
            <Link to="/services" className="carousel__link">
              <span>More Information</span>
            </Link>
            <div className="link__arrowForward">
              <ArrowForwardIos fontSize="small" />
            </div>
          </div>
        </div>
        <div className="slide__arrowForward">
          <ArrowForwardIos fontSize="large" />
        </div>
      </div>

      <div className="carousel__item carousel__projectmanagement fade">
        <div className="slide__arrowBack">
          <ArrowBackIos fontSize="large" />
        </div>
        <div className="item__wrapper">
          <h1 className="carousel__title">Project Management</h1>
          <p className="carousel__subtitle">
            To compete in today's economy, effective and innovation management
            is crucial for organizations
          </p>
          <div className="buttonWrapper">
            <Link to="/services" className="carousel__link">
              <span>More Information</span>
            </Link>
            <div className="link__arrowForward">
              <ArrowForwardIos fontSize="small" />
            </div>
          </div>
        </div>
        <div className="slide__arrowForward">
          <ArrowForwardIos fontSize="large" onClick={() => {}} />
        </div>
      </div>

      {/* <a href="" className="prev"></a> */}
      <div className="carousel__dots">
        <span onClick={() => {}}></span>
        <span onClick={() => {}}></span>
        <span onClick={() => {}}></span>
        <span onClick={() => {}}></span>
      </div>
    </div>
  );
};

export default Carousel;
