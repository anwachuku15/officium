import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <Link to="/">
          <img
            src={require("../assets/img/logo.svg")}
            alt=""
            className="navbar__logo"
          />
        </Link>
      </div>

      <div className="navbar__right">
        {MenuItems.map((item) => (
          <Link to={item.url} className={item.className}>
            <p>{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
