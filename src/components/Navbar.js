import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import { Menu as MenuIcon } from "@material-ui/icons";
import { Menu, MenuItem } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import json2mq from "json2mq";

// TODO: MUI NAVBAR & useScrollTrigger

const Navbar = () => {
  const [scrollMax, setScrollMax] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (windowWidth > 970) {
      const onScroll = (e) => {
        if (e.target.documentElement.scrollTop > 20) {
          setScrollMax(true);
        } else {
          setScrollMax(false);
        }
      };
      window.addEventListener("scroll", onScroll);
      window.addEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );

      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", () =>
          setWindowWidth(window.innerWidth)
        );
      };
    }
  }, [windowWidth]);

  const [anchorEl, setAnchorEl] = useState(null);
  const mobileMenu = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleOpenMenu = () => {
    // setAnchorEl(e.currentTarget);
    mobileMenu.current.classList.remove("closeMenu");
    mobileMenu.current.style.display = "block";
    mobileMenu.current.style.marginLeft = "auto";
    mobileMenu.current.style.marginRight = "auto";
    mobileMenu.current.classList.add("openMenu");
    setIsMenuOpen(true);
  };
  const handleCloseMenu = () => {
    // setAnchorEl(null);
    mobileMenu.current.classList.add("closeMenu");
    mobileMenu.current.classList.remove("openMenu");
    setTimeout(() => {
      mobileMenu.current.style.display = "none";
    }, 500);
    setIsMenuOpen(false);
  };

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
        <div
          className="burgerMenu"
          onClick={() => {
            isMenuOpen ? handleCloseMenu() : handleOpenMenu();
          }}
        >
          <MenuIcon fontSize="default" />
        </div>
        <ul className="mobileMenuContainer" ref={mobileMenu}>
          {MenuItems.map((item, index) => (
            <li>
              <NavLink
                to={item.url}
                className="navbar__link"
                activeClassName="navbar__linkActive"
                key={index}
                onClick={handleCloseMenu}
              >
                <p className="mobileMenuTitle">{item.title}</p>
              </NavLink>
            </li>
          ))}
        </ul>
        {/* <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          // style={{ marginTop: 80 }}
        >
          <div className="mobileMenu">
            {MenuItems.map((item, index) => (
              <NavLink
                to={item.url}
                className="navbar__link"
                activeClassName="navbar__linkActive"
                key={index}
                onClick={handleCloseMenu}
              >
                <p>{item.title}</p>
              </NavLink>
            ))}
          </div>
        </Menu> */}
      </div>
    </nav>
  );
};

export default Navbar;
