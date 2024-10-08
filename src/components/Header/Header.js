import "./Header.scss";
import logo from "../../assets/logo/InStock-Logo.svg";
import { Link, useLocation } from "react-router-dom";
import React from "react";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <nav className="header__navigation">
        <Link to={`/`} className="header__logo">
          <img className="header__image" alt="instock logo" src={logo} />
        </Link>
        <ul className="header__menu">
          <li className="header__item">
            <Link to={`warehouses`} className="header__link">
              <button
                type="submit"
                className={
                  "header__button " +
                  (location.pathname === "/warehouses" ? "active" : "")
                }
              >
                Warehouses
              </button>
            </Link>
          </li>
          <li className="header__item">
            <Link to={`inventories`} className="header__link">
              <button
                type="submit"
                className={
                  "header__button " +
                  (location.pathname === "/inventories" ? "active" : "")
                }
              >
                Inventory
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
