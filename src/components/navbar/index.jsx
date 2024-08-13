import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "./jp_icon.jpg";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import data from "./data";
import "./styles.scss";

function Navbar() {
  const [toggleIcon, setToggleIcon] = useState(false);

  function handleToggleIcon() {
    setToggleIcon(!toggleIcon);
  }

  function handleMenuClick() {
    setToggleIcon(false);
  }

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__container__logo">
          <img
            src={Logo}
            alt="Logo"
            className="navbar__container__logo__image"
          />
          <p>PORTFOLIO</p>
        </Link>
        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__items">
              <Link
                className="navbar__container__menu__items__links"
                to={item.to}
                onClick={handleMenuClick}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
