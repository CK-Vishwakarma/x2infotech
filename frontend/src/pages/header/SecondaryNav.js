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
            <a className="call-action-link" href="tel:+917999319552">
              Call us: +91 7999319552
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
            <GrFacebookOption />
          </span>
          <span className="socials">
            <GrLinkedinOption />
          </span>
          <span className="socials">
            <AiOutlineInstagram />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNav;
