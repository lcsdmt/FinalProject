import * as React from "react";
import { iAttractions } from "../utils/types";
import SingleAttraction from "./singleAttraction";

const Attractions: React.FC = (props: AttractionsProps) => {
  let dbAttractionsInfo = [];
  const [places, setPlaces] = React.useState<iAttractions[]>([]);

  const fetchAttractions = async () => {
    try {
      const data = await fetch("/api/attractions");
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

  return places.map((place, index) => <SingleAttraction place={place} key={index} />);
};

interface AttractionsProps {}

export default Attractions;
