import React, { useEffect, useState } from "react";
import { iAttractions } from "../../utils/types";


const SingleAttractions: React.FC = (props) => {
  const [attraction, setAttraction] = useState<iAttractions>({});
    // console.log(props.hey);

  const fetchAttractions = async () => {
    try {
      console.log("test");
      const url = "https://cors-anywhere.herokuapp.com/";
      await fetch(
        url +
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${props.ID}&key=AIzaSyAntdFxOZs3uD0WwPVp4HUb4MZkXrgSnOA`
      )
        .then((res) => res.json())
        .then((data) => {
            if(data.result) {
                setAttraction(data.result)
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
    <div key={attraction.place_id}>
      <h5>{attraction.name}</h5>
      <h5>{attraction.formatted_phone_number}</h5>
      <h5>{attraction.formatted_address}</h5>
      <h5>{attraction.url}</h5>
    </div>
  );
};


interface AttractionProps {
  id: any;
}

export default SingleAttractions;