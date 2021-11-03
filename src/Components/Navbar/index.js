import React from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../images/griffinjoshs-logo.png";
import Button from "../Buttons/index";

const index = () => {
  return (
    <nav>
      <div className="navbar-left">
        <a href="/">
          <img src={Logo} alt="me" height="60" width="65"></img>
        </a>
        <a href="/">
          <h1>Griffin Surett</h1>
        </a>
      </div>
      <div className="navbar-right">
        <ul className="nav-menu">
          <li>
            <a className='mainnav-item' href="/">Home</a>
          </li>
          <li>
            <a href='/' className='mainnav-item'>My Services</a>
            <ul className="services-list">
              <li>
                <a href="/webdev">Web Dev</a>
              </li>
              <li>
                <a href="/marketing">Marketing</a>
              </li>
              <li>
                <a href="/digart">Digital Art</a>
              </li>
              <li>
                <a href="/branding">Brand Creation</a>
              </li>
            </ul>
          </li>
          <li>
            <a href='/' className='mainnav-item'>My Skills</a>
            <ul className="services-list">
              <li>
                <a href="/webdev">Web Dev</a>
              </li>
              <li>
                <a href="/marketing">Marketing</a>
              </li>
              <li>
                <a href="/digart">Digital Art</a>
              </li>
              <li>
                <a href="/branding">Brand Creation</a>
              </li>
            </ul>
          </li>
          <li>
                <a className='mainnav-item' href="/contact">Contact</a>
              </li>
        </ul>
        <Button
          buttonSize="btn--medium"
          buttonStyle="btn--outline"
          id="skills-button"
        >
          My Skills
        </Button>
      </div>
      <div className="navbar-right-mobile">
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default index;
