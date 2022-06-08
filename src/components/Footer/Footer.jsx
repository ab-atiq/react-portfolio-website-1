import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import { UilLinkedinAlt } from "@iconscout/react-unicons";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>abulbasharatiqur@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/abulbasharatiq/">
            <UilLinkedinAlt color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/md.atiqur.927/">
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/ab-atiq">
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
