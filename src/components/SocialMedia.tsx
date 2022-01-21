import * as React from "react";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Linkedin from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";


const SocialMedia: React.FC= () => {
  return (
    <div className="sm-list">
      <a href="/" className="sm-link">
        <img src={Twitter} alt="" className="fab fa-twitter" />
      </a>
      <a href="/" className="sm-link">
        <img src={Instagram} alt="" className="fab fa-instagram" />
      </a>
      <a href="/" className="sm-link">
        <img src={Facebook} alt="" className="fab fa-facebook-f" />
      </a>
      <a href="/" className="sm-link">
        <img src={Linkedin} alt="" className="fab fa-linkedin-in" />
      </a>
    </div>
  );
};

export default SocialMedia;
