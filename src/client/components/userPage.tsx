import * as React from "react";
import { useState, useEffect } from 'react'

const User: React.FC = (props: UserProps) => {


  const [userInfo, setUserInfo] = useState()



  return (
    //     if (loggedIn) {
    //       return (
    // <div> Hello </div>
    //       )
    //     }
    //     else

    <>
      {/* <h1><userInfo></userInfo></h1>
      <br></br>
      <h1 style={{color: "silver"}}>Favorite Restuarants</h1>
      <br></br>
      <h1 style={{color: "silver"}}>Favorite Bars</h1>
      <br></br>
      <h1 style={{color: "silver"}}>Favorite Attractions</h1> */}
      
      {/* <h1 style={{ color: "silver" }}> Whats in the Chamber so far...</h1> */}
      <div className="jumbotron jumbotron-fluid" style={{ color: "silver", backgroundColor: "#202020"}}>
  <div className="container">
    <h1 className="display-4">What's in the Chamber so far...</h1>
    <p className="lead">Take a look at what stuck out to you the most and let's go from there!</p>
  </div>
</div> 
      <div className="card" style={{ color: "silver" }}>
        <div className="card-header">
          res.body.name
  </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>res.body.description</p>
            <footer className="blockquote-footer">res.body.website <cite title="Call to to check COVID-19 etiquette!">|| res.body.phone</cite></footer>
          </blockquote>
        </div>
      </div>
    </>
  );
};

interface UserProps { }

export default User;