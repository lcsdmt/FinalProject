import React, { useEffect, useState } from "react";
import { iBars } from "../utils/types";

const SingleBar: React.FC = (props) => {
  const [bar, setBar] = useState<iBars>({});

  const fetchBar = async () => {
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
                setBar(data.result);
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
    fetchBar();
  }, []);

  return (
    <div key={bar.place_id}>
      <h5>{bar.name}</h5>
      <h5>{bar.formatted_phone_number}</h5>
      <h5>{bar.formatted_address}</h5>
      <h5>{bar.url}</h5>
    </div>
  );
};

interface BarProps {
  id: any;
}

export default SingleBar;