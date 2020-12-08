import * as React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Home: React.FC = (props: HomeProps) => {
  return (
    <div id="Bodystuff" style={{ display: 'flex', flexDirection: 'row' }}>
      <Card style={{ width: '25rem' }}>
        <Card.Img id = "Cardimg" variant="top" src="./assets/pics/wide.jpeg" />
        <Card.Body>
          <Card.Title>Restaurants</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
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
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
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
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
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
