import React from "react";
import "./Overview.css";

const Overview = () => {
  return (
    <div className="overview__container">
      <div className="overview__div">
        <div className="overview__contentContainer">
          <div className="overview__headerContainer">
            <div className="overview__headerDiv">
              <h2>Overview</h2>
            </div>
          </div>
          <div className="overview__divider">
            {/* <div className="overview__dividerInternal"></div> */}
          </div>
          <div className="overview__bodyContainer">
            <div className="overview__body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Massa massa ultricies mi quis hendrerit dolor magna.
                Pellentesque dignissim enim sit amet venenatis urna cursus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip. Pellentesque eu
                tincidunt tortor aliquam nulla. Dictum at tempor
              </p>
              <p>
                Ultrices gravida dictum fusce ut placerat orci. Posuere ac ut
                consequat semper viverra nam libero. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="overview__imageContainer">
          <div className="overview__imageDiv">
            <img
              src={require("../../assets/img/about/overview.jpg")}
              alt=""
              className="overview__image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
