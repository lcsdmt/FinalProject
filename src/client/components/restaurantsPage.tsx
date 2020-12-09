import * as React from "react";
import { iRestaurants } from "../utils/types";
import SingleRestaurant from "./singleRestaurant";
import uuid from "react-uuid";
import { getData } from "../requests/request";

const Restaurants: React.FC = (props: RestaurantsProps) => {
  let dbRestaurantsInfo = [];
  const [restaurantIDs, setRestaurantsInfo] = React.useState<iRestaurants[]>(
    []
  );

  const fetchRestaurants = async () => {
    let dbRestaurants: any = [];
    let path = "/api/restaurants";
    await getData(path)
      .then((data) => {
        dbRestaurants = data;
      })
      .catch((err) => console.error(err));
    dbRestaurants.forEach((restaurant) =>
      dbRestaurantsInfo.push({
        restaurantID: restaurant.place_id,
        description: restaurant.description,
      })
    );
    setRestaurantsInfo([...dbRestaurantsInfo]);
  };
  React.useEffect(() => {
    fetchRestaurants();
  }, []);
  return (
    <div className="resultsDiv">
      {restaurantIDs.map((restaurant, index) => (
        <SingleRestaurant restaurant={restaurant} key={uuid()} />
      ))}
    </div>
  );
};

interface RestaurantsProps {}
export default Restaurants;
