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
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjMxLCJhY2Nlc3N0b2tlbmlkIjozMiwidW5pcXVlIjoiZGMxNjRlNTI3ZDZhNDcxYTNlZDIzNDhhODUzMjY3NTlhOWFlOTYwYTk4YWY2MDkzM2QxYTQ1ZTNlOTc3MjdlNCIsImlhdCI6MTYwNzM2Nzg1MH0.fcEwkexCgwdEAfBmNO1YVt_CtiU98SuMgUpk9bl8760",
        
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
