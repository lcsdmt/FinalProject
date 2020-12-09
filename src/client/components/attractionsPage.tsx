import * as React from "react";
import { iAttractions } from "../utils/types";
import SingleAttraction from "./singleAttraction";
import uuid from "react-uuid";
import { getData } from "../requests/request";

const Attractions: React.FC = (props: AttractionsProps) => {
  let dbAttractionsInfo = [];
  const [attractionIDs, setAttractionsInfo] = React.useState<iAttractions[]>([]);

  const fetchAttractions = async () => {
    let dbAttractions: any = [];
    let path = "/api/attractions";
    await getData(path).then(data => {
      dbAttractions = data
    }).catch(err => console.error(err));
    dbAttractions.forEach(attraction => dbAttractionsInfo.push({ attractionID: attraction.place_id, description: attraction.description }));
    setAttractionsInfo([...dbAttractionsInfo]);
  };
  React.useEffect(() => {
    fetchAttractions();
  }, []);
  return (
    <div className='resultsDiv'>
      {attractionIDs.map((attraction, index) => (
        <SingleAttraction attraction={attraction} key={uuid()} />
      ))}
    </div>
  );
};

interface AttractionsProps { }
export default Attractions;