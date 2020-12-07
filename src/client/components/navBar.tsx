import * as React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = (props: NavBarProps) => {
  //need fetch req to api to set UserID to state
  
  return (
    <>

      <div className="wrapper">
        <header>
          <nav>
            <div className="menu-icon">
              <i className="fa fa-bars fa-2x"></i>
            </div>
            <div className="logo" style={{ opacity: 0.7 }}>
              <u>LOCAL HOST</u>
            </div>
            <div className="menu">
              <ul>
                <li><a href="/">Home</a></li>
                <Link to={`/user/:id`}>
                  <li>User</li></Link>
              </ul>
            </div>
          </nav>
        </header>
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
