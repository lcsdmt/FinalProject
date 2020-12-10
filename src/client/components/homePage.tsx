import * as React from "react";
import { Link } from "react-router-dom";
import  Card  from "react-bootstrap/Card";
const Home: React.FC = (props: HomeProps) => {
  return (
    <div id="Bodystuff" style={{ display: 'flex', flexDirection: 'row' }} className='d-flex justify-content-around'>
      <Card style={{ width: '25rem' }}>
        <Card.Img id="Cardimg" variant="top" src="./assets/pics/wide.jpeg" />
        <Card.Body>
          <Card.Title>Restaurants</Card.Title>
          <Card.Text>
            The best food BHAM has to offer!
    </Card.Text>
          <Link to={`/restaurants`}>
            <button className="btn btn-sm btn-outline-info rounded-pill">
              Restaurants
          </button>
          </Link>
        </Card.Body>
      </Card>

      <Card style={{ width: '25rem' }}>
        <Card.Img id="Cardimg" variant="top" src="./assets/pics/2019AtomicCocktailsWEB-1012.jpg" />
        <Card.Body>
          <Card.Title>Bars</Card.Title>
          <Card.Text>
            For a good night out after a hard days work!
    </Card.Text>
          <Link to={`/bars`}>
            <button className="btn btn-sm btn-outline-info rounded-pill">
              Bars
          </button>
          </Link>
        </Card.Body>
      </Card>

      <Card style={{ width: '25rem' }}>
        <Card.Img id="Cardimg" variant="top" src="./assets/pics/Rotary-LinearTrail-scaled.jpg" />
        <Card.Body>
          <Card.Title>Attractions</Card.Title>
          <Card.Text>
            Have a free weekend? Let’s fill it up!
          </Card.Text>
          <Link to={`/attractions`}>
            <button className="btn btn-sm btn-outline-info rounded-pill">
              Attractions
          </button>
          </Link>
      
    </div>
  );
};

interface HomeProps { }

export default Home;
