import React from "react";
import { Link } from "react-router-dom";
import "./Testimonials.css";

// TODO: GRID & ANIMATIONS
const Testimonials = () => {
  return (
    <div className="testimonials__container">
      <div className="testimonials__div">
        <div className="testimonials__left">
          <div className="testimonials__leftTop">
            <div className="testimonial__description">
              <div className="testimonial__innerDesc">
                <p className="testimonial__quote">
                  "Iaculis eu non diam phasellus! Vestibulum lorem sed arcu ac
                  tortor dignissim convallis aenean et tortor."
                </p>
                <strong>Jane Doe</strong>
                <p className="testimonial__meta">
                  VP,{" "}
                  <a
                    href="http://www.github.com/anwachuku15"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    lorem USA
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="testimonials__leftBottom">
            <div className="testimonial__description">
              <div className="testimonial__innerDesc">
                <p className="testimonial__quote">
                  “Nec sagittis aliquam malesuada bibend elementum.Tincidunt
                  praesent semper feugiat.”
                </p>
                <strong>John Doe</strong>
                <p className="testimonial__meta">
                  Director of Marketing Services,{" "}
                  <a
                    href="http://www.github.com/anwachuku15"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lorem Ipsum, Inc.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials__right">
          <div className="testimonials__rightTop">
            <div className="testimonials__rightTopInner">
              <div className="testimonials__rightTopInnerText">
                <h4>JOIN US</h4>
                <h2>
                  Dignissim suspendisse in est ante in nibh mauris cursus mattis
                  mollis aliquam ut porttitor leo.
                </h2>
              </div>
            </div>
          </div>
          <div className="testimonials__rightBottom">
            <div className="testimonials__rightBottomInner">
              <div className="testimonials__rightBottomButtonWrapper">
                <Link to="/contact" className="testimonials__contactLink">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
