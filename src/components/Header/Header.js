import "./Header.scss";
import logo from "../../assets/logo/InStock-Logo.svg";
import { Link } from "react-router-dom";
import React from "react";

// add the className "header__button--active" on appropriate pages for active state button to appear

function Header() {
  return (
    <header className="header">
      <nav className="header__navigation">
        <Link to={`/`} className="header__logo">
          <img className="header__image" alt="instock logo" src={logo} />
        </Link>
        <ul className="header__menu">
          <li className="header__item">
            {/* <Link to={`api/warehouses`} className="header__link"> */}
            <button type="submit" className="header__button ">
              Warehouses
            </button>
            {/* </Link> */}
          </li>
          <li className="header__item">
            {/* <Link to={`api/inventories`} className="header__link"> */}
            <button type="submit" className="header__button">
              Inventory
            </button>
            {/* </Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
