import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { GrProjects } from "react-icons/gr";
import { RiCustomerServiceFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import { MdPersonPin } from "react-icons/md";
const MainNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  if (menuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <div className="main-navbar container">
      <div className="logo-section">
        <Link to="/home">
          <img src="/images/logofull.webp" alt="x2 infotech" />
        </Link>
      </div>
      <div className="menu-section hide-on-tablet ">
        <ul>
          <li>
            <NavLink activeClassName="link-active" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="link-active" to="/portfolio">
              portfolio
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="link-active" to="/services">
              services
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="link-active" to="/career">
              career
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="link-active" to="/contact">
              contact us
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="link-active" to="/about">
              about us
            </NavLink>
          </li>
        </ul>
      </div>
      <a
        href="tel:91 7999319552"
        className="call-action-link btn cta hide-on-tablet"
      >
        Hire Us
      </a>
      <div className="burger-container hide-on-desktop">
        <div
          onClick={handleMenu}
          className={menuOpen ? "mobile-menu-btn open" : "mobile-menu-btn"}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <aside className={menuOpen ? "sidebar-menu open" : "sidebar-menu"}>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              <span>
                <ImHome />
              </span>

              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={closeMenu}>
              <span>
                <GrProjects />
              </span>

              <span>portfolio</span>
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMenu}>
              <span>
                <RiCustomerServiceFill />
              </span>

              <span>services</span>
            </Link>
          </li>
          <li>
            <Link to="/career" onClick={closeMenu}>
              <span>
                <GrWorkshop />
              </span>

              <span> career</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              <span>
                <FaPhoneAlt />
              </span>

              <span>contact us</span>
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              <span>
                <MdPersonPin />
              </span>
              <span>about us</span>
            </Link>
          </li>
        </ul>
      </aside>
      <div
        className={menuOpen ? "overlay open" : "overlay"}
        onClick={closeMenu}
      ></div>
    </div>
  );
};

export default MainNavbar;
