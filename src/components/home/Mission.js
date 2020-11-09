import React from "react";
import "./Mission.css";

// TODO: ANIMATIONS

const Mission = () => {
  return (
    <div className="mission__container">
      <div className="mission__messageDiv">
        <div className="mission__emptyColumn"></div>
        <div className="mission__messageBox">
          <div className="mission__messageContainer">
            <div className="mission__innerText">
              <p>
                “Pellentesque eu tincidunt tortor aliquam nulla. Dictum at
                tempor commodo ullamcorper a. Ultrices gravida dictum fusce ut
                placerat orci.” – CEO{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
