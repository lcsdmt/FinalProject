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
      {/* <h1><userInfo></userInfo></h1> */}
      <br></br>
      <h1>Favorite Restuarants</h1>
      <br></br>
      <h1>Favorite Bars</h1>
      <br></br>
      <h1>Favorite Attractions</h1>
    </>
    );
};

interface UserProps { }

export default User;