import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { checkLogin, logout } from '../requests/request';
const NavBar: React.FC = (props: NavBarProps) => {
  const authBtn = () => {
    if (checkLogin()) {
      return <li className="nav-item"><Link className="btn btn-sm btn-outline-info rounded-pill Signout" to="" onClick={logout}>Sign Out</Link></li>
    } else {
      return <ul className="nav-item">
        <li>
          <Link className="btn btn-sm btn-outline-info rounded-pill Signout" to="/Signup">Sign Up</Link>
        </li>
      </ul >
    }
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark"
    style={{
      position: "sticky",
      top: 0,
      zIndex: 100
    }}
    >
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
            <a className="nav-link" href="/user/id">Favorites</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/findsomethingnew">Random</a>
          </li>
          {authBtn()}
        </ul>
      </div>
    </nav>
  )
  
};


interface NavBarProps { }

export default NavBar;
