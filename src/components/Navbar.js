import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import { Menu } from "@material-ui/icons";

// TODO: MUI NAVBAR & useScrollTrigger

const Navbar = () => {
  const [scrollMax, setScrollMax] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      if (e.target.documentElement.scrollTop > 20) {
        setScrollMax(true);
      } else {
        setScrollMax(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link to="/">
          <img
            src={require("../assets/img/logo.svg")}
            alt=""
            className={scrollMax ? "logoSmall" : "logoBig"}
          />
        </Link>
      </div>

      <div className="navbar__right">
        <div className="fullMenu">
          {MenuItems.map((item, index) => (
            <NavLink
              to={item.url}
              className="navbar__link"
              activeClassName="navbar__linkActive"
              key={index}
            >
              <p>{item.title}</p>
            </NavLink>
          ))}
        </div>
        <div className="burgerMenu">
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
