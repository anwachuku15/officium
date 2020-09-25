import React from "react";
import "./Footer.css";

import Facebook from "@material-ui/icons/Facebook";
import LinkedIn from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__div">
        <div className="footer">
          <div className="footer__social">
            <div className="socialIcon">
              <Facebook fontSize="large" />
            </div>
            <div className="socialIcon">
              <LinkedIn fontSize="large" />
            </div>
          </div>
          <div className="footer__info">
            © 2020 OFFICIUM LLC. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
