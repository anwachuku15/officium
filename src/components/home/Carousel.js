import React, { useEffect, useRef } from "react";
import "./Carousel.css";
import { Link } from "react-router-dom";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@material-ui/icons";

const Carousel = () => {
  const solutions = useRef();
  const clinicaldev = useRef();
  const education = useRef();
  const projectmgmt = useRef();

  const first = useRef();
  const second = useRef();
  const third = useRef();
  const fourth = useRef();
  const dotRefs = [first, second, third, fourth];

  let slide = 0;
  let prev = 3;
  let active = 0;
  const slides = [solutions, clinicaldev, education, projectmgmt];

  const slideControl = (n) => {
    if (slide === 3 && n === 1) {
      slide = 0;
      showSlide(slide, 3);
      console.log(0);
    } else if (slide === 0 && n === -1) {
      slide = 3;
      showSlide(slide, 0);
      console.log(3);
    } else {
      slide += n;
      prev = slide - n;
      showSlide(slide, prev);
      console.log(slide);
    }
  };

  const showSlide = (slide, prev) => {
    slides[prev].current.style.display = "none";
    dotRefs[prev].current.style.backgroundColor = "rgba(253, 253, 253, 0.74)";
    slides[slide].current.style.display = "flex";
    dotRefs[slide].current.style.backgroundColor = "#535353d0";
  };

  const chooseSlide = (selected) => {
    slides[slide].current.style.display = "none";
    dotRefs[slide].current.style.backgroundColor = "rgba(253, 253, 253, 0.74)";
    slide = selected;
    slides[slide].current.style.display = "flex";
    dotRefs[slide].current.style.backgroundColor = "#535353d0";
  };

  useEffect(() => {
    showSlide(slide, 3);
  }, [showSlide]);

  useEffect(() => {
    dotRefs[0].current.style.backgroundColor = "#535353d0";
  });

  return (
    <div className="carouselContainer">
      <div className="carousel">
        <div
          className="carousel__item carousel__solutions "
          style={{ display: "none" }}
          ref={solutions}
        >
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
                <ArrowForwardIosRounded fontSize="small" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="carousel__item carousel__clinicaldev "
          style={{ display: "none" }}
          ref={clinicaldev}
        >
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
                <ArrowForwardIosRounded fontSize="small" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="carousel__item carousel__education "
          style={{ display: "none" }}
          ref={education}
        >
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
                <ArrowForwardIosRounded fontSize="small" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="carousel__item carousel__projectmanagement "
          style={{ display: "none" }}
          ref={projectmgmt}
        >
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
                <ArrowForwardIosRounded fontSize="small" />
              </div>
            </div>
          </div>
        </div>

        <div className="slide__arrow">
          <div className="slide__arrowLeft">
            <ArrowBackIosRounded
              fontSize="large"
              onClick={() => slideControl(-1)}
            />
          </div>
          <div className="slide__arrowRight">
            <ArrowForwardIosRounded
              fontSize="large"
              onClick={() => slideControl(1)}
            />
          </div>
        </div>
      </div>
      <div className="carousel__dots">
        <span
          ref={first}
          style={{ marginRight: 10 }}
          onClick={() => {
            console.log(first.current.firstChild.data);
            if (slide !== 0) {
              chooseSlide(0);
            } else {
              return;
            }
          }}
        >
          0
        </span>

        <span
          ref={second}
          style={{ marginRight: 10 }}
          onClick={() => {
            if (slide !== 1) {
              console.log(second.current.firstChild.data);
              chooseSlide(1);
            } else return;
          }}
        >
          1
        </span>

        <span
          ref={third}
          style={{ marginRight: 10 }}
          onClick={() => {
            console.log(third.current.firstChild.data);
            if (slide !== 2) {
              chooseSlide(2);
            } else return;
          }}
        >
          2
        </span>
        <span
          ref={fourth}
          onClick={() => {
            console.log(fourth.current.firstChild.data);
            if (slide !== 3) {
              chooseSlide(3);
            } else return;
          }}
        >
          3
        </span>
      </div>
    </div>
  );
};

export default Carousel;
