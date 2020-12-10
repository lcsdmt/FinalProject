import React, { useEffect, useState } from "react";
import { iRestaurants } from "../utils/types";
import spinner from "../utils/spinner";
import uuid from "react-uuid";
import Card from 'react-bootstrap/Card';
import { getData } from "../requests/request";
import Accordion from 'react-bootstrap/Accordion';


const SingleRestaurant: React.FC = (props) => {
  const [restaurant, setRestaurant] = useState<iRestaurants>({});
  const [hours, setHours] = useState<Array<any>>([]);
  const [ifOpen, setIfOpen] = useState({});
  //   console.log(props.hey);

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

  useEffect(() => {
    fetchRestaurant();
  }, []);
  if (loading) {
    return spinner();
  } else {
    return (
      <Fragment>
        <Accordion defaultActiveKey="0">
        <Card style={{ display: "inline-block", width: '25rem' }}>

          <Card.Body>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              <Card.Title>{restaurant.name}</Card.Title>
              <Card.Text>
                {restaurant.description}
              </Card.Text>
            </Accordion.Toggle>
          </Card.Body>
          <Accordion.Collapse eventKey="1">
            <Card.Body>

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
          </Accordion.Collapse>
        </Card>
        </Accordion>
      </Fragment >
    )
  }
};

interface RestaurantProps {
  id: any;
}

export default SingleRestaurant;
