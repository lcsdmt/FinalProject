import * as React from "react";
import { iAttractions } from "../../utils/types";
import SingleAttractions from "./SingleAttractions";

const Attractions: React.FC = (props: AttractionsProps) => {
  let dbPlacesIDs = [];
  const [ids, setIDs] = React.useState<iAttractions[]>([]);

  const fetchAttractions = async () => {
    try {
      const data = await fetch("/api/restaurants");
      const dbPlaces = await data.json();

      dbPlaces.forEach((place) => dbPlacesIDs.push(place.place_id));
      setIDs([...dbPlacesIDs])
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
     fetchAttractions();
   }, []);
 
   return ids.map((placeID) => <SingleAttractions ID={placeID} />);
 };

interface AttractionsProps {}

export default Attractions;