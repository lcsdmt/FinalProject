import * as React from "react";
import { iRestaurants } from "../utils/types";
import SingleRestaurant from "./singleRestaurant";

const Restaurants: React.FC = (props: RestaurantsProps) => {
  let dbPlacesInfo = [];
  const [places, setPlaces] = React.useState<iRestaurants[]>([]);

  const fetchRestaurants = async () => {
    try {
      const data = await fetch("/api/restaurants");
      const dbPlaces = await data.json();

      dbPlaces.forEach((place) => dbPlacesInfo.push({placeID: place.place_id, description: place.description}));
      setPlaces([...dbPlacesInfo]);
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    fetchRestaurants();
  }, []);

  return places.map((place, index) => <SingleRestaurant place={place} key={index} />);
};

interface RestaurantsProps {}

export default Restaurants;
