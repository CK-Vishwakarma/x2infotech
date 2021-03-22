import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        <img src="/images/logo.png" alt="x2 infotech" />
      </div>
      <div className="menu-section hide-on-tablet ">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">portfolio</Link>
          </li>
          <li>
            <Link to="/services">services</Link>
          </li>
          <li>
            <Link to="/career">career</Link>
          </li>
          <li>
            <Link to="/contact">contact us</Link>
          </li>
          <li>
            <Link to="/about">about us</Link>
          </li>
        </ul>
      </div>
      <Link to="/" className="btn cta hide-on-tablet">
        Hire Us
      </Link>
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
