import React, { useEffect, useState } from "react";
import { iRestaurants } from "../utils/types";

const SingleRestaurant: React.FC = (props: SRprops) => {
  const [restaurant, setRestaurant] = useState<iRestaurants>({});
  const [hours, setHours] = useState<Array<any>>([]);
  const [ifOpen, setIfOpen] = useState({});
  //   console.log(props.hey);

  const fetchRestaurant = async () => {
    try {
      const url = "https://cors-anywhere.herokuapp.com/";
      await fetch(
        url +
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${props.place.placeID}&key=AIzaSyAntdFxOZs3uD0WwPVp4HUb4MZkXrgSnOA`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.result) {
            data.result.description = props.place.description;
            setRestaurant(data.result);
            setHours(data.result.opening_hours.weekday_text);
            setIfOpen(data.result.opening_hours.open_now);
            console.log(props.key)
          } else {
            return;
          }
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRestaurant();
  }, []);

  return (
    <React.Fragment key={props.id}>
      <div className="card">
        <div className="card-body shadow">
          {/* <h5>{restaurant.photos}</h5> */}
          <h5>
            <u>{restaurant.name}</u>
          </h5>
          <p>{restaurant.description}</p>
          <h5 className="text-info">{restaurant.formatted_phone_number}</h5>
          <h5>{restaurant.formatted_address}</h5>
          <a href={restaurant.website}>{restaurant.website}</a>
          <br />
          <a href={restaurant.url}>{restaurant.url}</a>
          <h5>Google User Rating:{restaurant.rating}</h5>
          {hours.map((hour) => (
            <h6>{hour}</h6>
          ))}

<button>Add to Fav</button>
          
        </div>
      </div>
    </React.Fragment>
  );
};

interface SRprops {
  id: any;
}

export default SingleRestaurant;
