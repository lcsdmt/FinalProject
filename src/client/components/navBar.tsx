import * as React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = (props: NavBarProps) => {
    return (
      // not actually a nav bar yet
      <>
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
      </>
    );
  };
  
  interface NavBarProps {}
  
  export default NavBar;