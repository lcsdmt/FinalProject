import React, { useEffect, useState } from "react";
import { iAttractions } from "../utils/types";
import spinner from "../utils/spinner";
import uuid from "react-uuid";

const SingleAttraction: React.FC = (props) => {
  const [attraction, setAttraction] = useState<iAttractions>({});
  const [hours, setHours] = useState<Array<any>>([]);
  const [ifOpen, setIfOpen] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchAttraction = async () => {
    try {
      const url = "https://cors-anywhere.herokuapp.com/";
      await fetch(
        url +
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${props.place.placeID}&key=AIzaSyAntdFxOZs3uD0WwPVp4HUb4MZkXrgSnOA`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.result) {
            // let weekdayText = data.result.opening_hours.weekday_text;
            data.result.description = props.place.description;
            setAttraction(data.result);
            // if (weekdayText = undefined) {
            //   weekdayText.value = 'Information currently unavailable';
            //   setHours(weekdayText.value)
            // } else {

            // }
            setHours(data.result.opening_hours.weekday_text);
            setIfOpen(data.result.opening_hours.open_now);
            setLoading(false);
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
    fetchAttraction();
  }, []);

  if (loading) {
    return spinner();
  } else {
    return (
      <>
        <div className="card">
          <div className="card-body shadow">
            {/* <h5>{attraction.photos}</h5> */}
            <h5>
              <u>{attraction.name}</u>
            </h5>
            <p>{attraction.description}</p>
            <h5 className="text-info">{attraction.formatted_phone_number}</h5>
            <h5>{attraction.formatted_address}</h5>
            <button onClick={() => window.open(attraction.website)}>{attraction.website}</button>
            <br />
            <button onClick={() => window.open(attraction.url)}>Directions to: {attraction.name}</button>
            <h5>Google User Rating:{attraction.rating}</h5>
            {hours.map((hour) => (
              <h6 key={uuid()}>{hour}</h6>
            ))}
          </div>
        </div>
      </>
    );
  }
};

interface AttractionProps {
  id: any;
}

export default SingleAttraction;
