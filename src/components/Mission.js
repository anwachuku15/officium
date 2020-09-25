import React from "react";
import "./Mission.css";

const Mission = () => {
  return (
    <div className="mission__container">
      <div className="mission__messageDiv">
        <div className="mission__emptyColumn"></div>
        <div className="mission__messageBox">
          <div className="mission__messageContainer">
            <div className="mission__innerText">
              <p>
                “What sets us apart from other consulting firms, is our
                commitment to go above and beyond the client’s expectations and
                become fully invested in their success.” – CEO{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
