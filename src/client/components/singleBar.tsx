import React, { useEffect, useState } from "react";
import { iBars } from "../utils/types";

const SingleBar: React.FC = (props) => {
  const [bar, setBar] = useState<iBars>({});
  const [hours, setHours] = useState<Array<any>>([]);
  const [ifOpen, setIfOpen] = useState({});

  const fetchBar = async () => {
    try {
      const url = "https://cors-anywhere.herokuapp.com/";
      await fetch(
        url +
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${props.bar.barID}&key=AIzaSyAntdFxOZs3uD0WwPVp4HUb4MZkXrgSnOA`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.result) {
            data.result.description = props.bar.description;
            setBar(data.result);
            setHours(data.result.opening_hours.weekday_text);
            setIfOpen(data.result.opening_hours.open_now);
          } else {
            return;
          }
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBar();
  }, []);

  return (
    <>
      <div className="card">
        <div className="card-body shadow">
          {/* <h5>{bar.photos}</h5> */}
          <h5>
            <u>{bar.name}</u>
          </h5>
          <p>{bar.description}</p>
          <h5 className="text-info">{bar.formatted_phone_number}</h5>
          <h5>{bar.formatted_address}</h5>
          <a href={bar.website}>{bar.website}</a>
          <br />
          <a href={bar.url}>{bar.url}</a>
          <h5>Google User Rating:{bar.rating}</h5>
          {hours.map((hour) => (
            <h6>{hour}</h6>
          ))}
        </div>
      </div>
    </>
  );
};

interface BarProps {
  id: any;
}

export default SingleBar;
