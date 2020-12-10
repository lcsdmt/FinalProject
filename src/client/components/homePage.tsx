import React, { useEffect, useState, Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { checkLogin } from "../requests/request";

const Home: React.FC = (props: HomeProps) => {
  const hist = useHistory();
  useEffect (() => {
    if (!checkLogin()) {
      hist.push("/login");
    }
  })
  return (
    <div id="Bodystuff" style={{ display: 'flex', flexDirection: 'row' }} className='d-flex justify-content-around'>
      <Card style={{ width: '25rem' }}>
        <Card.Img id = "Cardimg" variant="top" src="./assets/pics/wide.jpeg" />
        <Card.Body>
          <Card.Title>Restaurants</Card.Title>
          <Card.Text>
            Hungry? We know you are. Click here to find your new favorite spot to eat or get your favorite dish from that place you love!
    </Card.Text>
          <Link to={`/restaurants`}>
            <button className="btn btn-sm btn-outline-info rounded-pill">
              Restaurants
          </button>
          </Link>
        </Card.Body>
      </Card>

      <Card style={{ width: '25rem' }}>
        <Card.Img id = "Cardimg" variant="top" src="./assets/pics/2019AtomicCocktailsWEB-1012.jpg" />
        <Card.Body>
          <Card.Title>Bars</Card.Title>
          <Card.Text>
           2020 has been stressful. You deserve a drink! Explore some awesome bars and even take home a cocktail kit!
    </Card.Text>
          <Link to={`/bars`}>
            <button className="btn btn-sm btn-outline-info rounded-pill">
              Bars
          </button>
          </Link>
        </Card.Body>
      </Card>

      <Card style={{ width: '25rem' }}>
        <Card.Img id = "Cardimg" variant="top" src="./assets/pics/Rotary-LinearTrail-scaled.jpg" />
        <Card.Body>
          <Card.Title>Attractions</Card.Title>
          <Card.Text>
   Nothing to do? No where to go? Well we have the solution to that! Click here to find some local attractions!
    </Card.Text>
          <Link to={`/attractions`}>
            <button className="btn btn-sm btn-outline-info rounded-pill">
              Attractions
          </button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

interface HomeProps { }

export default Home;
