import React from "react";
import "./Overview.css";
import Grid from "@material-ui/core/Grid";

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
                Established in 2017, NUES LLC is a comprehensive firm focused on
                serving various sectors of small, medium, and large companies,
                including global corporations and government agencies. We offer
                services ranging from project management, regulatory affairs,
                clinical research development, education services, risk
                management, public health research, health equity research and
                custom solutions.
              </p>
              <p>
                Based in Silver Spring, Maryland, NUES consulting brings in over
                25 years of experts knowledge to help clients navigate the
                complex journey of reaching their research destination.
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
