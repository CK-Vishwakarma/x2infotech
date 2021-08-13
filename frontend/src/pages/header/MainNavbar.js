import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { GrProjects } from "react-icons/gr";
import { RiCustomerServiceFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import { MdPersonPin } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";

const SubSubMenuComponent = (props) => {
  const { subSubMenuItem, closeMenu, setSubSubMenuMobileOpen } = props;
  const closeSubMenuFunc = () => {
    closeMenu();
    setSubSubMenuMobileOpen(false);
  };
  return subSubMenuItem.map((menuItem, index) => {
    return (
      <li key={index}>
        <Link onClick={closeSubMenuFunc} to={menuItem.link}>
          {menuItem.title}
        </Link>
      </li>
    );
  });
};
const SubMenuComponent = (props) => {
  const [subSubMenuMobileOpen, setSubSubMenuMobileOpen] = useState(false);

  const { closeMenu } = props;
  const subSubMenuMobileFunc = () => {
    setSubSubMenuMobileOpen(!subSubMenuMobileOpen);
  };
  useEffect(() => {
    setSubSubMenuMobileOpen(false);
  }, []);
  return (
    <>
      <li onClick={subSubMenuMobileFunc}>
        {props.subMenuItem}{" "}
        <span
          className={
            subSubMenuMobileOpen ? "dropdown-arrow open" : "dropdown-arrow"
          }
        >
          <AiFillCaretDown />
        </span>{" "}
      </li>
      <div
        className={
          subSubMenuMobileOpen
            ? "sub-sub-menu-mobile open"
            : "sub-sub-menu-mobile"
        }
      >
        <SubSubMenuComponent
          setSubSubMenuMobileOpen={setSubSubMenuMobileOpen}
          closeMenu={closeMenu}
          subSubMenuItem={props.subSubMenuItem}
        />
      </div>
    </>
  );
};

const MainNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subMenuMobileOpen, setSubMenuMobileOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
    setSubMenuMobileOpen(false);
  };
  if (menuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  const closeMenu = () => {
    setMenuOpen(false);
    setSubMenuOpen(false);
  };
  const subMenuOpenFunc = () => {
    setSubMenuOpen(true);
  };
  const subMenuCloseFunc = () => {
    setSubMenuOpen(false);
  };
  const subMenuMobileFunc = () => {
    setSubMenuMobileOpen(!subMenuMobileOpen);
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
          <li onMouseEnter={subMenuOpenFunc} onMouseLeave={subMenuCloseFunc}>
            <NavLink to="#">
              services
              <span className="nav-icon">
                <AiFillCaretDown />
              </span>
            </NavLink>

            <ul className={subMenuOpen ? "sub-menu open" : "sub-menu"}>
              <li>
                <Link to="#">Design and Development</Link>
                <div className="sub-sub-menu">
                  <ul>
                    <li>
                      <Link to="/services/website-design" onClick={closeMenu}>
                        Website Design{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/mobile-application"
                        onClick={closeMenu}
                      >
                        Mobile Applications
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/CMS" onClick={closeMenu}>
                        CMS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/system-maintenance"
                        onClick={closeMenu}
                      >
                        System Maintenance
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="#">Digital Marketing</Link>
                <div className="sub-sub-menu">
                  <ul>
                    <li>
                      <Link to="/services/SEO" onClick={closeMenu}>
                        SEO
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="#">Graphic Design</Link>
                <div className="sub-sub-menu">
                  <ul>
                    <li>
                      <Link
                        to="/services/advertising-and-promotion"
                        onClick={closeMenu}
                      >
                        Advertising & Promotion
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/brochure-design" onClick={closeMenu}>
                        Brochure Design{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/logo-design" onClick={closeMenu}>
                        Logo Design
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/video-editing" onClick={closeMenu}>
                        Video and Photo Editing
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
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
          <li onClick={subMenuMobileFunc}>
            <Link to="#">
              <span>
                <RiCustomerServiceFill />
              </span>
              <span>services</span>
            </Link>
            <div
              className={
                subMenuMobileOpen ? "dropdown-arrow open" : "dropdown-arrow"
              }
            >
              <AiFillCaretDown />
            </div>{" "}
          </li>
          <div
            className={
              subMenuMobileOpen ? "subMenuMobile open" : "subMenuMobile"
            }
          >
            <SubMenuComponent
              closeMenu={closeMenu}
              subMenuItem={"Design and Development"}
              subSubMenuItem={[
                { title: "Website Design", link: "/services/website-design" },
                {
                  title: "Mobile Applications",
                  link: "/services/mobile-application",
                },
                { title: "CMS", link: "/services/CMS" },
                {
                  title: "System Maintenance",
                  link: "/services/system-maintenance",
                },
              ]}
            />
            <SubMenuComponent
              closeMenu={closeMenu}
              subMenuItem={"Digital Marketing"}
              subSubMenuItem={[{ title: "SEO", link: "/services/SEO" }]}
            />
            <SubMenuComponent
              closeMenu={closeMenu}
              subMenuItem={"Graphic Design"}
              subSubMenuItem={[
                {
                  title: "Advertising & Promotion",
                  link: "/services/advertising-and-promotion",
                },
                {
                  title: " Brochure Design",
                  link: "/services/brochure-design",
                },
                { title: "Logo Design", link: "/services/logo-design" },
                {
                  title: "Video and Photo Editing",
                  link: "/services/video-editing",
                },
              ]}
            />
          </div>

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
