import * as React from "react";
import ReactDOM from "react-dom";
import { iRestaurants } from "../utils/types";
import Card from 'react-bootstrap/Card';

const RandomRestaurants: React.FC = (props: RandomProps) => {
  let restaurantsList = [];
  const [restaurants, setRestaurants] = React.useState<iRestaurants[]>([]);
  const [randomRest, setRandomRest] = React.useState<iRestaurants>({});
  const [resButtonPressed, setResButtonPressed] = React.useState(false);
  const fetchRestaurants = async () => {
    try {
      const data = await fetch("/api/restaurants", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjI0LCJhY2Nlc3N0b2tlbmlkIjoyOSwidW5pcXVlIjoiMDQ4NGM1N2ViZjI3MTNmOTdhN2E4M2Q0NzUyZjY4YTRkYTlkN2U5ODJhNTA5OGY2YTJmY2M1OTE1ODUyZmYyMyIsImlhdCI6MTYwNzM3OTcwMX0.PFvaoArpyPgia8DoCDesvMKY_v0r9cxfX6ZLGTUmo_k",
          "Access-Control-Allow-Origin": "localhost:3000",
        },
      });
      const restaurantDB = await data.json();
      restaurantDB.forEach((restaurant) => {
        const url = "https://cors-anywhere.herokuapp.com/";
        fetch(
          url +
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${restaurant.place_id}&key=AIzaSyAntdFxOZs3uD0WwPVp4HUb4MZkXrgSnOA`
        )
          .then((res) => res.json())
          .then((data) => {
            let websiteRestaurant = data.result;
            restaurantsList.push({
              restaurantID: restaurant.place_id,
              description: restaurant.description,
              name: restaurant.name,
              website: websiteRestaurant.website,
            });
          });
      });

      setRestaurants(restaurantsList);
    } catch (err) {
      console.error(err);
    }
  };

  const randomRestaurants = () => {
    const randomNum = Math.floor(Math.random() * restaurants.length);
    setRandomRest(restaurants[randomNum]);
    setResButtonPressed(true);
  };

  React.useEffect(() => {
    fetchRestaurants();
  }, []);

  if (resButtonPressed == true) {
    return (
      <div>
         <Card style={{ width: "25rem" }}>
          <Card.Body>
            <Card.Title>{randomRest.name}</Card.Title>
            <Card.Text>
        {randomRest.formatted_phone_number}<br/>
        {randomRest.website}<br/>
        {randomRest.description}<br/>
        </Card.Text>
        <div  className = "text-center">
        <button className = "ranbutton btn btn-sm btn-outline-info rounded-pill" onClick={randomRestaurants}>Restaurants</button>
       </div>
        </Card.Body>
        </Card>
      </div>
    );
  } else {
    return (
      <div  className = "text-center">
        <Card style={{ width: "25rem" }}>
          <Card.Body>
        <button className = "ranbutton btn btn-sm btn-outline-info rounded-pill" onClick={randomRestaurants}>Restaurants</button>
        </Card.Body>
         </Card>
      </div>
    );
  }
};

interface RandomProps {}

export default RandomRestaurants;
