import * as React from "react";
import { iRestaurants } from "../utils/types";
import SingleRestaurant from "./singleRestaurant";
import uuid from "react-uuid";
import { getData } from "../requests/request";

const Restaurants: React.FC = (props: RestaurantsProps) => {
  let dbRestaurantsInfo = [];
  const [restaurantIDs, setRestaurantsInfo] = React.useState<iRestaurants[]>([]);

  const fetchRestaurants = async () => {
    let dbRestaurants: any = [];
    let path = "/api/restaurants";
    await getData(path).then(data => {
      dbRestaurants = data
    }).catch(err => console.error(err));
    dbRestaurants.forEach(restaurant => dbRestaurantsInfo.push({ restaurantID: restaurant.place_id, description: restaurant.description }));
    setRestaurantsInfo([...dbRestaurantsInfo]);
  };
  React.useEffect(() => {
    fetchRestaurants();
  }, []);
  return restaurantIDs.map((restaurant, index) => <SingleRestaurant restaurant={restaurant} key={uuid()} />);
};

interface RestaurantsProps { }
export default Restaurants;




import React, { useEffect, useState, Fragment } from "react";
import { iRestaurants } from "../utils/types";
import spinner from "../utils/spinner";
import uuid from "react-uuid";
import Card from 'react-bootstrap/Card';
import { getData } from "../requests/request";

const SingleRestaurant: React.FC = (props) => {
  const [restaurant, setRestaurant] = useState<iRestaurants>({});
  const [hours, setHours] = useState<Array<any>>([]);
  const [ifOpen, setIfOpen] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchRestaurant = async () => {
    const url = "https://cors-anywhere.herokuapp.com/";
    let path = url + `https://maps.googleapis.com/maps/api/place/details/json?place_id=${props.restaurant.restaurantID}&key=AIzaSyAntdFxOZs3uD0WwPVp4HUb4MZkXrgSnOA`
    await getData(path).then(data => {
      if (data.result) {
                data.result.description = props.restaurant.description;
                setRestaurant(data.result);
                setHours(data.result.opening_hours.weekday_text);
                setIfOpen(data.result.opening_hours.open_now);
                setLoading(false);
              } else {
                return;
              }
      }).catch(err => console.error(err));
  };
  function myFunction(x) {
    window.open(x);
  }
  useEffect(() => {
    fetchRestaurant();
  }, []);
  if (loading) {
    return spinner();
  } else {
    return (
      <Fragment>
        <Card style={{ display: "inline-block", width: '25rem' }}>
          <Card.Body>
            <Card.Title>{restaurant.name}</Card.Title>
            <Card.Text>
              {restaurant.description}
            </Card.Text>
            <Card.Text>
              <button
                onClick={() => window.open(restaurant.url)}
              >
                {restaurant.formatted_address}
              </button>
            </Card.Text>
            <Card.Text>
              {restaurant.formatted_phone_number}
            </Card.Text>
            <Card.Text>
              Google User Rating: {restaurant.rating}/5
            </Card.Text>
            {hours.map((hour) => (
              <Card.Text key={uuid()}>{hour}</Card.Text>))}
            <button
              className="btn btn-sm btn-outline-info rounded-pill"
              onClick={() => window.open(restaurant.website)}
            >
              {restaurant.website}
            </button>
          </Card.Body>
        </Card>
      </Fragment>
    )
  }
};

interface restaurantProps {
  id: any;
}

export default SingleRestaurant;