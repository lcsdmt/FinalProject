import * as React from "react";
import { iRestaurants } from "../utils/types";
import SingleRestaurant from "./singleRestaurant";
import uuid from "react-uuid";


const Restaurants: React.FC = (props: RestaurantsProps) => {
  let dbPlacesInfo = [];
  const [places, setPlaces] = React.useState<iRestaurants[]>([]);
  

  const fetchRestaurants = async () => {
    
    try {
      const data = await fetch("/api/restaurants", {
        headers:{
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjI0LCJhY2Nlc3N0b2tlbmlkIjoyOSwidW5pcXVlIjoiMDQ4NGM1N2ViZjI3MTNmOTdhN2E4M2Q0NzUyZjY4YTRkYTlkN2U5ODJhNTA5OGY2YTJmY2M1OTE1ODUyZmYyMyIsImlhdCI6MTYwNzM3OTcwMX0.PFvaoArpyPgia8DoCDesvMKY_v0r9cxfX6ZLGTUmo_k",
          "Access-Control-Allow-Origin": "localhost:3000"
        }
      });
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
return places.map((place: any, id: any) => <SingleRestaurant key={uuid()} place={place}  />);
};
interface RestaurantsProps {}

export default Restaurants;