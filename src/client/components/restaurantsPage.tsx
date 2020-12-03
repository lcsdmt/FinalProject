import * as React from "react";
import { iRestaurants } from "../utils/types";
import SingleRestaurant from "./singlerestaurant";

const Restaurants: React.FC = (props: RestaurantsProps) => {
  let dbPlacesIDs = [];
  const [ids, setIDs] = React.useState<iRestaurants[]>([]);

  const fetchRestaurants = async () => {
    try {
      const data = await fetch("/api/restaurants");
      const dbPlaces = await data.json();

      dbPlaces.forEach((place) => dbPlacesIDs.push(place.place_id));
      setIDs([...dbPlacesIDs])
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    fetchRestaurants();
  }, []);


  
   return ids.map((placeID) =>  <SingleRestaurant hey={placeID} />);

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

interface RestaurantsProps {}

export default Restaurants;
