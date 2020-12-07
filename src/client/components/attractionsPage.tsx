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
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjMxLCJhY2Nlc3N0b2tlbmlkIjozMiwidW5pcXVlIjoiZGMxNjRlNTI3ZDZhNDcxYTNlZDIzNDhhODUzMjY3NTlhOWFlOTYwYTk4YWY2MDkzM2QxYTQ1ZTNlOTc3MjdlNCIsImlhdCI6MTYwNzM2Nzg1MH0.fcEwkexCgwdEAfBmNO1YVt_CtiU98SuMgUpk9bl8760",
        
          "Access-Control-Allow-Origin": "localhost:3000"
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
