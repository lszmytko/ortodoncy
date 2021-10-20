import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const NavigationPres = ({
  handleMenuShow,
  isMenuShown,
}: {
  handleMenuShow: () => void;
  isMenuShown: boolean;
}) => {
  return (
    <div className="Navigation">
      <div className="Navigation_container section-center">
        <div className="logo">
          <img src="/images/logo.png" alt="heheh" />
        </div>
        <div className="menu">
          <button onClick={handleMenuShow}>
            <GiHamburgerMenu className="menu-btn-icon" />
          </button>
        </div>
        <div className="social-links">
          <a href="http://facebook.com">
            <img src="/images/social-links/facebook.jpg" alt="facebook" />
          </a>
          <a href="http://instagram.com">
            <img src="/images/social-links/instagram.jpg" alt="instagram" />
          </a>
        </div>
        <div className="links_container">
          <ul className={`links ${!isMenuShown && "links_hidden"}`}>
            <li className="link">
              <Link to="/">Home</Link>
            </li>
            <li className="link dropdown">
              <Link to="/aboutus">O nas</Link>
            </li>
            <li className="link">
              <Link to="/cennik">Cennik</Link>
            </li>
            <li className="link">
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationPres;
