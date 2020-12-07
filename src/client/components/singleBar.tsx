import React, { useEffect, useState } from "react";
import { iBars } from "../utils/types";
import spinner from "../utils/spinner";
import uuid from "react-uuid";

const SingleBar: React.FC = (props) => {
  const [bar, setBar] = useState<iBars>({});
  const [hours, setHours] = useState<Array<any>>([]);
  // const [photosR, setPhotosR] = useState<Array<any>>([]);
  // const [photos, setPhotos] = useState<Array<any>>([]);
  const [ifOpen, setIfOpen] = useState({});
  const [loading, setLoading] = useState(true);

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
            // setPhotosR(data.result.photos.photo_reference);
            // fetch(url + `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photosR.photo_reference}&key=AIzaSyAntdFxOZs3uD0WwPVp4HUb4MZkXrgSnOA`)
            // .then((photo)=>{setPhotos([photo])});
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
function myFunction(x) {
  window.open(x);
}
  useEffect(() => {
    fetchBar();
  }, []);

  if (loading) {
    return spinner();
  } else {
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
            <button onClick={() => window.open(bar.website)}>{bar.website}</button>
            <br />
            <button onClick={() => window.open(bar.url)}>Directions to: {bar.name}</button>
            <h5>Google User Rating:{bar.rating}</h5>
            {hours.map((hour) => (
              <h6 key= {uuid()}>{hour}</h6>
            ))}
          </div>
        </div>
      </>
    );
  }
};

interface BarProps {
  id: any;
}

export default SingleBar;
