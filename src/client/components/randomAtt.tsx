import * as React from "react";
import ReactDOM from "react-dom";
import { iAttractions } from "../utils/types";
import Card from "react-bootstrap/Card";

const RandomAttractions: React.FC = (props: RandomProps) => {
  let attractionsList = [];
  const [attractions, setAttractions] = React.useState<iAttractions[]>([]);
  const [randomAttraction, setRandomAttraction] = React.useState<iAttractions>(
    {}
  );
  const [attButtonPressed, setAttButtonPressed] = React.useState(false);
  const fetchAttractions = async () => {
    try {
      const data = await fetch("/api/attractions", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjI0LCJhY2Nlc3N0b2tlbmlkIjoyOSwidW5pcXVlIjoiMDQ4NGM1N2ViZjI3MTNmOTdhN2E4M2Q0NzUyZjY4YTRkYTlkN2U5ODJhNTA5OGY2YTJmY2M1OTE1ODUyZmYyMyIsImlhdCI6MTYwNzM3OTcwMX0.PFvaoArpyPgia8DoCDesvMKY_v0r9cxfX6ZLGTUmo_k",
            "Access-Control-Allow-Origin": "localhost:3000",
        },
      });
      const attractionsDB = await data.json();
      attractionsDB.forEach((attraction) => {
        const url = "https://cors-anywhere.herokuapp.com/";
        fetch(
          url +
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${attraction.place_id}&key=AIzaSyAntdFxOZs3uD0WwPVp4HUb4MZkXrgSnOA`
        )
          .then((res) => res.json())
          .then((data) => {
            attractionsList.push({
              attractionID: attraction.place_id,
              description: attraction.description,
              name: data.result.name,
              website: data.result.website,
            });
          });
      });
      setAttractions(attractionsList);
    } catch (err) {
      console.error(err);
    }
  };

  const randomAttractions = () => {
    const randomNum = Math.floor(Math.random() * attractions.length);
    setRandomAttraction(attractions[randomNum]);
    setAttButtonPressed(true);
  };
  React.useEffect(() => {
    fetchAttractions();
  }, []);

  if (attButtonPressed == true) {
    return (
      <div>
        <Card style={{ width: "25rem" }}>
          <Card.Body>
            <Card.Title>{randomAttraction.name}</Card.Title>
            <Card.Text>
              {randomAttraction.formatted_phone_number}<br />
              {randomAttraction.website}<br />
              {randomAttraction.description}<br />
            </Card.Text>
            <button onClick={randomAttractions}>Attractions</button>
          </Card.Body>
        </Card>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={randomAttractions}>Attractions</button>
      </div>
    );
  }
};

interface RandomProps { }

export default RandomAttractions;
