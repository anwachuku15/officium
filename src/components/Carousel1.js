import React, { useEffect, useRef } from "react";
import "./Carousel1.css";
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
  const content0 = useRef();
  const content1 = useRef();
  const content2 = useRef();
  const content3 = useRef();

  let slide = 0;
  let prev = 3;
  const slides = [solutions, clinicaldev, education, projectmgmt];
  const content = [content0, content1, content2, content3];

  const slideControl = (n) => {
    if (slide === 3 && n === 1) {
      slide = 0;
      prev = 3;
    } else if (slide === 0 && n === -1) {
      slide = 3;
      prev = 0;
    } else {
      slide += n;
      prev = slide - n;
    }
    showSlide(slide, prev);
  };

  const showSlide = (slide, prev) => {
    slides[prev].current.style.opacity = 0;
    dotRefs[prev].current.style.backgroundColor = "rgba(253, 253, 253, 0.74)";
    slides[slide].current.style.opacity = 1;
    dotRefs[slide].current.style.backgroundColor = "#535353d0";
    showContent(slide);
  };

  const chooseSlide = (selected) => {
    prev = slide;
    slide = selected;
    slides[slide].current.style.opacity = 1;
    dotRefs[slide].current.style.backgroundColor = "#535353d0";
    slides[prev].current.style.opacity = 0;
    dotRefs[prev].current.style.backgroundColor = "rgba(253, 253, 253, 0.74)";
    showContent(slide);
  };

  const showContent = (slide) => {
    content[slide].current.classList.add("slideUp");
    content[prev].current.classList.remove("slideUp");

    content[slide].current.style.opacity = 0;
    setTimeout(() => {
      content[slide].current.style.opacity = 1;
    }, 1700);
  };

  useEffect(() => {
    showSlide(slide, 3);
    dotRefs[0].current.style.backgroundColor = "#535353d0";
  });

  return (
    <div className="carouselContainer1">
      <div className="carousel1">
        <div
          className="carousel__item1 carousel__solutions1 fader"
          style={{ opacity: 0 }}
          ref={solutions}
        >
          <div className="item__wrapper1" ref={content0}>
            <h1 className="carousel__title1">Solutions</h1>
            <p className="carousel__subtitle1">
              An Innovative Understanding and Evaluation of Science Company
            </p>
            <div className="buttonWrapper1">
              <Link to="/services" className="carousel__link1">
                <span>More Information</span>
              </Link>
              <div className="link__arrowForward1">
                <ArrowForwardIosRounded fontSize="small" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="carousel__item1 carousel__clinicaldev1 fader"
          style={{ opacity: 0 }}
          ref={clinicaldev}
        >
          <div className="item__wrapper1" ref={content1}>
            <h1 className="carousel__title1">Clinical Development</h1>
            <p className="carousel__subtitle1">
              With our research services and diverse therapeutic expertise we
              enhance your capacity and minimize risk
            </p>
            <div className="buttonWrapper1">
              <Link to="/services" className="carousel__link1">
                <span>More Information</span>
              </Link>
              <div className="link__arrowForward1">
                <ArrowForwardIosRounded fontSize="small" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="carousel__item1 carousel__education1 fader"
          style={{ opacity: 0 }}
          ref={education}
        >
          <div className="item__wrapper1" ref={content2}>
            <h1 className="carousel__title1">Education</h1>
            <p className="carousel__subtitle1">
              Achieve more with our talented team of education researchers and
              analysts
            </p>
            <div className="buttonWrapper1">
              <Link to="/services" className="carousel__link1">
                <span>More Information</span>
              </Link>
              <div className="link__arrowForward1">
                <ArrowForwardIosRounded fontSize="small" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="carousel__item1 carousel__projectmanagement1 fader"
          style={{ opacity: 0 }}
          ref={projectmgmt}
        >
          <div className="item__wrapper1" ref={content3}>
            <h1 className="carousel__title1">Project Management</h1>
            <p className="carousel__subtitle1">
              To compete in today's economy, effective and innovation management
              is crucial for organizations
            </p>
            <div className="buttonWrapper1">
              <Link to="/services" className="carousel__link1">
                <span>More Information</span>
              </Link>
              <div className="link__arrowForward1">
                <ArrowForwardIosRounded fontSize="small" />
              </div>
            </div>
          </div>
        </div>

        <div className="slide__arrow1">
          <div className="slide__arrowLeft1">
            <ArrowBackIosRounded
              fontSize="large"
              onClick={() => slideControl(-1)}
            />
          </div>
          <div className="slide__arrowRight1">
            <ArrowForwardIosRounded
              fontSize="large"
              onClick={() => slideControl(1)}
            />
          </div>
        </div>
      </div>

      <div className="carousel__dots1">
        <span
          ref={first}
          style={{ marginRight: 10 }}
          onClick={() => {
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
