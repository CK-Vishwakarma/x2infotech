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
            Call us: +91 7999319552
          </p>
          <p>
            <span>
              <RiMailLine />
            </span>
            Email: info@x2infotech.com
          </p>
        </div>
        <div className="col-1 ">
          <span>
            <GrFacebookOption />
          </span>
          <span>
            <GrLinkedinOption />
          </span>
          <span>
            <AiOutlineInstagram />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNav;
