import * as React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = (props: NavBarProps) => {
  //need fetch req to api to set UserID to state
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/"><strong>Local Host</strong></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/user/id">In My Sights</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/findsomethingnew'>Find Something New</a>
          </li>
          {authBtn()}
        </ul>
      </div>

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
    </>
  );
};

interface NavBarProps { }

export default NavBar;
