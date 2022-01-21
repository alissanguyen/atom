import * as React from "react";
import logo from "../assets/logo.png";

const NavBar: React.FC = () => {
  return (
    <nav className="nav">
      <a href="index.html" className="logo-box hue-shift">
        <img src={logo} alt="" className="logo" />
      </a>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            Case Study
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
