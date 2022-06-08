import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>abulbasharatiqur@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.facebook.com/md.atiqur.927/">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/md.atiqur.927/">
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/ab-atiq">
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
        <div className="i-icons">
          <a href="https://github.com/ab-atiq">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/abulbasharatiq/">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.facebook.com/md.atiqur.927/">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
