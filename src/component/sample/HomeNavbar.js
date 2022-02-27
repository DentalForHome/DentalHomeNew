import React from "react";
import { Link } from "react-router-dom";

function HomeNavbar(props) {
  const scrollFaq = () => {
    const anchor = document.querySelector("#home-faq");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const scrollHome = () => {
    const anchor = document.querySelector("#HomeBanner");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const scrollAbout = () => {
    const anchor = document.querySelector("#home-about");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const scrollService = () => {
    const anchor = document.querySelector("#home-service");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const scrollContact = () => {
    const anchor = document.querySelector("#home-contact");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="home-navbar">
      <div className="home-navbar-container">
        <div className="navbar-left">
          <div className="navbar-left-text">
            <p>DENTAL FOR HOME</p>
          </div>
        </div>
        <div className="navbar-center">
          <div className="navbar-center-option">
            {/* <p onClick={() => scrollHome()}>Home</p> */}

            <Link
            to={`/`}
            style={{ textDecoration: `none`}}
          ><p style={props.tabName==='home' ? {color:`rgb(60,100,177)`,fontWeight:`600`}:{color:`rgb(55, 63, 65)`}}>Home</p></Link>
          </div>
          <div className="navbar-center-option">
            {/* <p onClick={() => scrollAbout()}>About</p> */}
            <Link
            to={`/about`}
            style={{ textDecoration: `none`}}
          ><p style={props.tabName==='about' ? {color:`rgb(60,100,177)`,fontWeight:`600`}:{color:`rgb(55, 63, 65)`}}>About</p></Link>
          </div>
          <div className="navbar-center-option">
            <p onClick={() => scrollService()}>Services</p>
            
          </div>
          <div className="navbar-center-option">
            {/* <p onClick={() => scrollContact()}>Contact</p> */}
            <Link
            to={`/contactUs`}
            style={{ textDecoration: `none`}}
          > <p style={props.tabName==='contact' ? {color:`rgb(60,100,177)`,fontWeight:`600`}:{color:`rgb(55, 63, 65)`}}>Contact</p></Link>
          </div>
          <div className="navbar-center-option">
            <p onClick={() => scrollFaq()}>FAQ</p>
          </div>
        </div>
        <div className="navbar-right">
          <Link
            to={`/auth/login`}
            style={{ textDecoration: `none`}}
          >
            <div className="navbar-right-text">
              <p style={{ color: `white` }}>Log In</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeNavbar;
