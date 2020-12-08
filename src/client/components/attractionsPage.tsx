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
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjI0LCJhY2Nlc3N0b2tlbmlkIjoyOSwidW5pcXVlIjoiMDQ4NGM1N2ViZjI3MTNmOTdhN2E4M2Q0NzUyZjY4YTRkYTlkN2U5ODJhNTA5OGY2YTJmY2M1OTE1ODUyZmYyMyIsImlhdCI6MTYwNzM3OTcwMX0.PFvaoArpyPgia8DoCDesvMKY_v0r9cxfX6ZLGTUmo_k",
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
  return places.map((place, index) => <SingleAttraction place={place} key={uuid()} />);
};
interface AttractionsProps {}

export default Attractions;