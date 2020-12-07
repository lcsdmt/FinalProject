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
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjMyLCJhY2Nlc3N0b2tlbmlkIjozMywidW5pcXVlIjoiN2Q5YjIwYzg0MTZhNmZmMTQxMGM4YzYzMTE3YTUxNDQxMDc0MDZmODQ1MDY3ZGNhNWQyNzhkNWQ2MDIxZDE3YyIsImlhdCI6MTYwNzM2ODEzMX0.XmHGinHdeLE_3nnwHdaFnCgEuDP-i-dDIayzT1Umwsw"
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
