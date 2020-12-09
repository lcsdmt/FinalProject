import * as React from "react";
import ReactDOM from "react-dom";
import { iBars } from "../utils/types";
import Card from "react-bootstrap/Card";

const RandomBars: React.FC = (props: RandomProps) => {
  let barsList = [];
  const [bars, setBars] = React.useState<iBars[]>([]);
  const [randomBar, setRandomBar] = React.useState<iBars>({});
  const [barButtonPressed, setBarButtonPressed] = React.useState(false);

  const fetchBars = async () => {
    try {
      const data = await fetch("/api/bars", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjI0LCJhY2Nlc3N0b2tlbmlkIjoyOSwidW5pcXVlIjoiMDQ4NGM1N2ViZjI3MTNmOTdhN2E4M2Q0NzUyZjY4YTRkYTlkN2U5ODJhNTA5OGY2YTJmY2M1OTE1ODUyZmYyMyIsImlhdCI6MTYwNzM3OTcwMX0.PFvaoArpyPgia8DoCDesvMKY_v0r9cxfX6ZLGTUmo_k",
          "Access-Control-Allow-Origin": "localhost:3000",
        },
      }
      );
      const barsDB = await data.json();
      barsDB.forEach((bar) => {
        const url = "https://cors-anywhere.herokuapp.com/";
        fetch(
          url +
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${bar.place_id}&key=AIzaSyAntdFxOZs3uD0WwPVp4HUb4MZkXrgSnOA`
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.result.website) {
              barsList.push({
                barID: bar.place_id,
                description: bar.description,
                name: bar.name,
                website: data.result.website,
              });
            }
            // else{
            //   barsList.push({
            //     barID: bar.place_id,
            //     description: bar.description,
            //     name: bar.name
            //   })
            // };
          });
      });

      setBars(barsList);
    } catch (err) {
      console.error(err);
    }
  };

  const randomBars = () => {
    const randomNum = Math.floor(Math.random() * bars.length);
    setRandomBar(bars[randomNum]);
    setBarButtonPressed(true);
  };
  React.useEffect(() => {
    fetchBars();
  }, []);

  if (barButtonPressed == true) {
    if (randomBar.website !== undefined) {
      return (
        <div>
          <Card style={{ width: "25rem" }}>
            <Card.Body>
              <Card.Title>{randomBar.name}</Card.Title>
              <Card.Text>
                {randomBar.formatted_phone_number}
                <br />
                {randomBar.website}
                <br />
                {randomBar.description}
                <br />
              </Card.Text>
              <button onClick={randomBars}>Bars</button>
            </Card.Body>
          </Card>
        </div>
      );
    } else {
      return (
        <div>
          <Card style={{ width: "25rem" }}>
            <Card.Body>
              <Card.Title>{randomBar.name}</Card.Title>
              <Card.Text>
                {randomBar.formatted_phone_number}
                <br />
                {randomBar.description}
                <br />
              </Card.Text>
              <button onClick={randomBars}>Bars</button>
            </Card.Body>
          </Card>
        </div>
      );
    }
  } else {
    return (
      <div>
        <button onClick={randomBars}>Bars</button>
      </div>
    );
  }
};

interface RandomProps { }

export default RandomBars;
