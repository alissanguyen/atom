import * as React from "react";
import image4 from "../assets/liq-4.png";
import image5 from "../assets/liq-5.png";
import SocialMedia from "./SocialMedia";

const Content: React.FC = () => {
  return (
    <div className="content">
      <div className="content-details">
        <h1 className="title">Learn about atoms and travel the universe</h1>
        <p className="description">
          If you want to learn more about how atoms and quarks together form and
          run this universe, this is the place to go. Signup now to get first on
          the line!
        </p>

        <div className="search">
          <input
            type="text"
            className="search-bar"
            placeholder="Email..."
            required
          />
          <input type="button" className="search-btn hue-shift" value="Join" />
        </div>

        <SocialMedia />
      </div>

      <div className="image-group hue-shift-slow">
        <img src={image5} alt="" className="blob-large" />
        <img src={image4} alt="" className="blob-bean" />
      </div>
    </div>
  );
};

export default Content;
