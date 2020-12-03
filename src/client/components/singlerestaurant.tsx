import React, { useEffect, useState } from "react";
import { iRestaurants } from "../utils/types";

const SingleRestaurant: React.FC = (props) => {
  const [restaurant, setRestaurant] = useState<iRestaurants>({});
  //   console.log(props.hey);

  const fetchRestaurant = async () => {
    try {
      console.log("test");
      const url = "https://cors-anywhere.herokuapp.com/";
      await fetch(
        url +
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${props.ID}&key=AIzaSyAntdFxOZs3uD0WwPVp4HUb4MZkXrgSnOA`
      )
        .then((res) => res.json())
        .then((data) => {
            if(data.result) {
                setRestaurant(data.result);
            } else {
                return
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
    <div key={restaurant.place_id}>
      <h5>{restaurant.name}</h5>
      <h5>{restaurant.formatted_phone_number}</h5>
      <h5>{restaurant.formatted_address}</h5>
      <h5>{restaurant.url}</h5>
    </div>
  );
};


interface RestaurantProps {
  id: any;
}

export default SingleRestaurant;
