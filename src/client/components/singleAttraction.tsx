import React, { useEffect, useState, Fragment } from "react";
import { iAttractions } from "../utils/types";
import spinner from "../utils/spinner";
import uuid from "react-uuid";
import Card from 'react-bootstrap/Card';
import { getData } from "../requests/request";
import Accordion from 'react-bootstrap/Accordion';

const SingleAttraction: React.FC = (props) => {
  const [attraction, setAttraction] = useState<iAttractions>({});
  const [hours, setHours] = useState<Array<any>>([]);
  const [ifOpen, setIfOpen] = useState({});
  const [loading, setLoading] = useState(true);

  
  const fetchattraction = async () => {
    const url = "https://cors-anywhere.herokuapp.com/";
    let path = url + `https://maps.googleapis.com/maps/api/place/details/json?place_id=${props.attraction.attractionID}&key=AIzaSyAntdFxOZs3uD0WwPVp4HUb4MZkXrgSnOA`
    await getData(path).then(data => {
      if (data.result) {
                data.result.description = props.attraction.description;
                setAttraction(data.result);
                setHours(data.result.opening_hours.weekday_text);
                setIfOpen(data.result.opening_hours.open_now);
                setLoading(false);
              } else {
                return;
              }
      }).catch(err => console.error(err));
  };
  function myFunction(x) {
    window.open(x);
  }
  useEffect(() => {
    fetchattraction();
  }, []);
  if (loading) {
    return spinner();
  } else {
    return (
      <Fragment>
         <Accordion defaultActiveKey="0">
        <Card style={{ display: "inline-block", width: '25rem' }}>
          <Card.Body>
          <Accordion.Toggle as={Card.Header} eventKey="1">

            <Card.Title>{attraction.name}</Card.Title>
            <Card.Text>
              {attraction.description}
              </Card.Text>
            </Accordion.Toggle>
          </Card.Body>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
            <Card.Text>
              <button
                onClick={() => window.open(attraction.url)}
              >
                {attraction.formatted_address}
              </button>
            </Card.Text>
            <Card.Text>
              {attraction.formatted_phone_number}
            </Card.Text>
            <Card.Text>
              Google User Rating: {attraction.rating}/5
            </Card.Text>
            {hours.map((hour) => (
              <Card.Text key={uuid()}>{hour}</Card.Text>))}
            <button
              className="btn btn-sm btn-outline-info rounded-pill"
              onClick={() => window.open(attraction.website)}
            >
              {attraction.website}
            </button>
          </Card.Body>
          </Accordion.Collapse>
        </Card>
        </Accordion>
      </Fragment>
    )
  }
};

interface attractionProps {
  id: any;
}

export default SingleAttraction;