import * as React from "react";
import { iRestaurants } from "../utils/types";
import SingleRestaurant from "./singleRestaurant";

const Restaurants: React.FC = (props: RestaurantsProps) => {
  let dbPlacesIDs = [];
  const [ids, setIDs] = React.useState<iRestaurants[]>([]);

  const fetchRestaurants = async () => {
    try {
      const data = await fetch("/api/restaurants");
      const dbPlaces = await data.json();

      dbPlaces.forEach((place) => dbPlacesIDs.push(place.place_id));
      setIDs([...dbPlacesIDs]);
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    fetchRestaurants();
  }, []);

  return ids.map((placeID) => <SingleRestaurant ID={placeID} />);
};

interface RestaurantsProps {}

export default Restaurants;