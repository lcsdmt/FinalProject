import * as React from 'react';
import { Link } from 'react-router-dom';
import { checkLogin, logout } from '../requests/request';
const NavBar: React.FC = (props: NavBarProps) => {

  const authBtn = () => {
    if (checkLogin()) {
      return <li className="nav-item"><Link className="nav-link" to="" onClick={logout}>Logout</Link></li>
    } else {
      return <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
    }
  }
  return (

    // <nav id="topnav" className="navbar navbar-expand-lg navbar-dark ">
    //   <a className="navbar-brand" href="/"><strong>IRON SIGHTS</strong></a>
    //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarNav">
    //     <ul className="nav nav-pills">
    //       <li className="nav-item active">
    //         <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="/favorites">Favorites</a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="/Signup">Sign Up!</a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>


    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/"><strong>IRON SIGHTS</strong></a>
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
          <li className="nav-item">
            <a className="nav-link" href="/Signup">Create Profile</a>
          </li>
          {authBtn()}
        </ul>
      </div>
    </nav>
  )
};

interface NavBarProps { }

export default NavBar;
