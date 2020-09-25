import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials__container">
      <div className="testimonials__div">
        <div className="testimonials__left">
          <div className="testimonials__leftTop">
            <div className="testimonial__description">
              <div className="testimonial__innerDesc">
                <p className="testimonial__quote">
                  “Great professional service! Their assistance was valuable in
                  preparation for meeting with the FDA.”
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
                  “The team is professional, knowledgeable and dependable. We
                  look forward to hiring them again soon.”
                </p>
                <strong>John Doe</strong>
                <p className="testimonial__meta">
                  Director of Marketing Services,{" "}
                  <a
                    href="http://www.github.com/anwachuku15"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Complex Media, Inc.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials__right"></div>
      </div>
    </div>
  );
};

export default Testimonials;
