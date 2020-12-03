import React, { useEffect, useState } from "react";
import restaurantsDB from "../../server/db/restaurantsDB";
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
            setRestaurant(data.result)
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
    <div>
      <h1>{restaurant.name}</h1>
      <h1>{restaurant.formatted_address}</h1>
    </div>
  );
};

// return restaurants.map((restaurant, index) => {
//   return (
//     <div
//       key={index}
//       className="min-vh-100 d-flex justify-content-center align-items-center"
//     >
//       <h4 className="display-1">Hello {restaurant.name}!</h4>
//       <p>{restaurant.formatted_phone_number}!</p>
//       <p>{restaurant.formatted_address}!</p>
//       <p>{restaurant.url}!</p>
//     </div>
//   );
// });

interface RestaurantProps {
  id: any;
}

export default SingleRestaurant;
