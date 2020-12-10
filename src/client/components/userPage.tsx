import * as React from "react";
import { useState, useEffect, Fragment } from 'react';
import Card from "react-bootstrap/esm/Card";
import { getData } from '../requests/request';

const User: React.FC = (props: UserProps) => {

  const [userInfo, setUserInfo] = useState();
  const [userId] = useState(sessionStorage.USER_ID);
  const [rFavorites, setRFavorites] = useState([]);
  const [bFavorites, setBFavorites] = useState([]);
  const [aFavorites, setAFavorites] = useState([]);

  React.useEffect( () => {
    fetchBFAVS();
    fetchRFAVS();
    fetchAFAVS(); 
  }, []);

  let fetchRFAVS = async () => {
    let path = `/api/favoriterestaurants/${userId}`;
    await getData(path).then(data => {
      if (data) {
        setRFavorites(data);
      }
    }).catch(err => console.error(err));
  };

  let fetchBFAVS = async () => {
    let path = `/api/favoritebars/${userId}`;
    await getData(path).then(data => {
      if (data) {
        setBFavorites(data);
      }
    }).catch(err => console.error(err));

  };let fetchAFAVS = async () => {
    let path = `/api/favoriteattractions/${userId}`;
    await getData(path).then(data => {
      if (data) {
        setAFavorites(data);
      }
    }).catch(err => console.error(err));
  };

  return (
    <div 
    className="main-container"
    style={{
      display: "flex", 
      justifyContent: "center",
      textAlign: "center",
      opacity: ".9"
    }}
    >
      <div className="bars-container">
      {bFavorites.map((itm, idx) => {
        if(itm.name !==null)
          return (
            <Fragment key={idx}>
        <Card style={{ display: "inline-block", width: '25rem' }}>
          <Card.Body>
            <Card.Title
            style={{
              font: "helvetica"
            }}
            >{itm.name}</Card.Title>
            <Card.Text
            >{itm.description.substring(0, 100)}...</Card.Text>
            <Card.Text
            style={{
                color: "silver"
              }}
            >*Offers curbside cocktails!</Card.Text>
            </Card.Body>
            </Card>
            </Fragment>
          )
        })}
      </div>
      <div className="restaurants-container">
      {rFavorites.map((itm, idx) => {
          if(itm.name !==null)
          return (
            <Fragment key={idx}>
        <Card style={{ display: "inline-block", width: '25rem' }}>
          <Card.Body>
            <Card.Title
            style={{
              font: "helvetica"
            }}
            >{itm.name}</Card.Title>
            <Card.Text
            >{itm.description.substring(0, 100)}...</Card.Text>
            <Card.Text
            style={{
                color: "silver"
              }}
            >*Observes COVID-19 social-distancing procedures</Card.Text>
            </Card.Body>
            </Card>
            </Fragment>
          )
        })}
      </div>
      <div className="attractions-container">
      {aFavorites.map((itm, idx) => {
        if(itm.name !==null)
          return (
            <Fragment key={idx}>
        <Card style={{ display: "inline-block", width: '25rem' }}>
          <Card.Body>
            <Card.Title
            style={{
              font: "helvetica"
            }}
            >{itm.name}</Card.Title>
            <Card.Text
            >{itm.description.substring(0, 100)}...</Card.Text>
            <Card.Text
            style={{
                color: "silver"
              }}
            >*Get your tickets online!</Card.Text>
            </Card.Body>
            </Card>
            </Fragment>
          )
        })}
      </div>
    </div>
  );
};

interface UserProps { }

export default User;