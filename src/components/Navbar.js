import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import { Menu } from "@material-ui/icons";

const Navbar = () => {
  const [scrollMax, setScrollMax] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      if (e.target.documentElement.scrollTop > 30) {
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
            <Link to={item.url} className={item.className} key={index}>
              <p>{item.title}</p>
            </Link>
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
