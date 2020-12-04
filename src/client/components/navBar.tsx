import * as React from "react";
import { Link } from "react-router-dom";
import Fishvid from "./video/video.mp4";

const NavBar: React.FC = (props: NavBarProps) => {
  return (
   
    <>

<div className="wrapper">
         <header>
            <nav>
               <div className="menu-icon">
                  <i className="fa fa-bars fa-2x"></i>
               </div>
               <div className="logo">
               LOCAL HOST
               </div>
               <div className="menu">
                  <ul>
                     <li><a href="/">Home</a></li>
                     <li><a href="/user/:id">User</a></li>
                     <li><a href="/restaurants">Restaurants</a></li>
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

interface NavBarProps {}

export default NavBar;
