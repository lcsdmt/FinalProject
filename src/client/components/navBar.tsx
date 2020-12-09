import * as React from "react";

import { Link } from "react-router-dom";
const NavBar: React.FC = (props: NavBarProps) => {
  return (
    <nav id="topnav" className="navbar navbar-expand-lg navbar-dark ">
      <a className="navbar-brand" href="/">
        <strong>LOCAL HOST</strong>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="nav nav-pills container-fluid justify-content-end">
        <li className="nav-item">
            <a className="nav-link" href="/random">
              Find Something New
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/auth/login">
              Login
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

interface NavBarProps {}

export default NavBar;
