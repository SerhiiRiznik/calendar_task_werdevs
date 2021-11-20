import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header_content">
        <div className="logo">
          <span>
            w<br />e
          </span>
          Rdevs
        </div>
        <nav className="header_nav">
          <ul>
            <li>
              <NavLink
                exact
                className="nav_link"
                activeClassName="selected"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav_link"
                activeClassName="selected"
                to="/about"
              >
                About us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
