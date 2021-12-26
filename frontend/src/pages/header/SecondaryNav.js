import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { RiMailLine } from "react-icons/ri";
import { GrFacebookOption } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
const SecondaryNav = () => {
  return (
    <div className="infobar secondary-nav hide-on-mobile">
      <div className="container navbar ">
        <div className="col-1 ">
          <p>
            <span>
              <IoCallSharp />
            </span>
            <a className="call-action-link" href="tel:+919407269664">
              Call us: +91 9407269664
            </a>
          </p>
          <p>
            <span>
              <RiMailLine />
            </span>
            <a className="call-action-link" href="mailto:info@x2infotech.com">
              Email: info@x2infotech.com
            </a>
          </p>
        </div>
        <div className="col-1 ">
          <span className="socials">
            <a
              href="https://www.facebook.com/X2Infotech"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <GrFacebookOption />
            </a>
          </span>
          <span className="socials">
            <a
              href="https://www.aedin.com/in/x2-infotech-032a311b8/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <GrLinkedinOption />
            </a>
          </span>

          <span className="socials">
            <a
              href="https://www.instagram.com/x2_infotech/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <AiOutlineInstagram />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNav;
