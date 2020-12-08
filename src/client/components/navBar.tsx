import * as React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = (props: NavBarProps) => {
  return (

    <nav id = "topnav" className="navbar navbar-expand-lg navbar-dark ">
  <a className="navbar-brand" href="/"><strong>IRON SIGHTS</strong></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="nav nav-pills">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Bars</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Profile</a>
      </li>
    </ul>
  </div>
</nav>
  )};    

      {/* <div className="d-flex justify-content-between">
        <Link to={`/`}>
          <button className="btn btn-sm btn-outline-info rounded-pill">
            Home
          </button>
        </Link>
        <Link to={`/user/:id`}>
          <button className="btn btn-sm btn-outline-info rounded-pill">
            User
          </button>
        </Link>
      </div> */}

interface NavBarProps { }

export default NavBar;
