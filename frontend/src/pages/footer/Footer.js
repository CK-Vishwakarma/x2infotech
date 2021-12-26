import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footers">
      <div className="container-full">
        <div className="container">
          <div className="footer-layout">
            <div className="col-4">
              <img src="/images/logofull.webp" alt="logo" />
              <p>X2 is a Platform where you can grow your Business further</p>
            </div>
            <div className="col-4">
              <h1>SERVICES</h1>
              <ul>
                <li>
                  <Link to="/">Design and Development</Link>
                </li>
                <li>
                  <Link to="/">Digital Marketing</Link>
                </li>
                <li>
                  <Link to="/">Graphics Design</Link>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h1>QUICK LINKS</h1>
              <ul>
                <li>
                  <Link to="/">About Us</Link>
                </li>

                <li>
                  <Link to="/">Portfolio</Link>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h1>CONTACT US</h1>
              <ul>
                <li>
                  <Link to="/">info@x2infotech.com</Link>
                </li>

                <li>
                  <Link to="/">hr@x2infotech.com</Link>
                </li>
              </ul>
              <div className="contact-1">
                <h3>HR Related Query</h3>
                <p>+91 7000026259</p>
              </div>
              <div className="contact-1">
                <h3>IT Related Query</h3>
                <p>+91 9407269664</p>
              </div>
            </div>
          </div>
          <div className="hr-line"></div>
          <section className="copyright-text">
            &copy; All rights reserved 2021 @ X2 Infotech.com
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
