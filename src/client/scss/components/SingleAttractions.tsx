import React, { useEffect, useState } from "react";
import { iAttractions } from "../../utils/types";


const SingleAttractions: React.FC = (props) => {
  const [attraction, setAttraction] = useState<iAttractions>({});
  const [hours, setHours] = useState<Array<any>>([]);
  const [ifOpen, setIfOpen] = useState({});
    // console.log(props.hey);


  const fetchAttractions = async () => {
    try {
      const url = "https://cors-anywhere.herokuapp.com/";
      await fetch(
        url +
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${props.ID}&key=AIzaSyAntdFxOZs3uD0WwPVp4HUb4MZkXrgSnOA`
      )
        .then((res) => res.json())
        .then((data) => {
            if(data.result) {
                setAttraction(data.result)
                setHours(data.result.opening_hours.weekday_text);
                setIfOpen(data.result.opening_hours.open_now);
            } else {
                return
            }
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAttractions();
  }, []);

  return (
    <>
      <div className="card">
        <div className="card-body shadow">
          {/* <h5>{attraction.photos}</h5> */}
          <h5>
            <u>{attraction.name}</u>
          </h5>
          <h5 className="text-info">{attraction.formatted_phone_number}</h5>
          <h5>{attraction.formatted_address}</h5>
          <a href={attraction.website}>{attraction.website}</a>
          <br />
          <a href={attraction.url}>{attraction.url}</a>
          <h5>Google User Rating:{attraction.rating}</h5>
          {/* <p>{attraction.description}</p> */}

          {hours.map((hour) => (
            <h6>{hour}</h6>
          ))}
          {/* <h5>{attraction.opening_hours}</h5> */}
        </div>
      </div>
    </>
  );
};


interface AttractionProps {
  id: any;
}

export default SingleAttractions;