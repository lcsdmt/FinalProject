import * as React from "react";
import { iAttractions } from "../utils/types";
import SingleAttraction from "./singleAttraction";
import uuid from "react-uuid";

const Attractions: React.FC = (props: AttractionsProps) => {
  let dbAttractionsInfo = [];
  const [places, setPlaces] = React.useState<iAttractions[]>([]);

  const fetchAttractions = async () => {
    try {
      const data = await fetch("/api/attractions", {
        headers:{
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjMyLCJhY2Nlc3N0b2tlbmlkIjozMywidW5pcXVlIjoiN2Q5YjIwYzg0MTZhNmZmMTQxMGM4YzYzMTE3YTUxNDQxMDc0MDZmODQ1MDY3ZGNhNWQyNzhkNWQ2MDIxZDE3YyIsImlhdCI6MTYwNzM2ODEzMX0.XmHGinHdeLE_3nnwHdaFnCgEuDP-i-dDIayzT1Umwsw"
        }
      });
      const dbAttractions = await data.json();
      dbAttractions.forEach((place) => dbAttractionsInfo.push({placeID: place.place_id, description: place.description}));
      setPlaces([...dbAttractionsInfo]);
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    fetchAttractions();
  }, []);

  return places.map((place, index) => <SingleAttraction place={place} key= {uuid()} />);
};

interface AttractionsProps {}

export default Attractions;
