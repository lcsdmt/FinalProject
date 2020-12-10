import { iAttractions } from "../utils/types";
import SingleAttraction from "./singleAttraction";
import uuid from "react-uuid";
import { getData } from "../requests/request";
import React, { useEffect, useState, Fragment } from "react";
import Carousel from 'react-bootstrap/Carousel'

const Attractions: React.FC = (props: AttractionsProps) => {
  let dbAttractionsInfo = [];
  const [attractionIDs, setAttractionsInfo] = React.useState<iAttractions[]>(
    []
  );

  const fetchAttractions = async () => {
    let dbAttractions: any = [];
    let path = "/api/attractions";
    await getData(path)
      .then((data) => {
        dbAttractions = data;
      })
      .catch((err) => console.error(err));
    dbAttractions.forEach((attraction) =>
      dbAttractionsInfo.push({
        attractionID: attraction.place_id,
        description: attraction.description,
      })
    );
    setAttractionsInfo([...dbAttractionsInfo]);
  };
  React.useEffect(() => {
    fetchAttractions();
  }, []);
  return (
    <Fragment>
       <div id = "carousel">
      <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 text-center img-fluid" 
      src="./assets/pics/photo-1545823812-046670c74194-min.jpeg"
      alt="First slide"
    />
    <Carousel.Caption id = "caption">
      <p>Birmingham Botanical Gardens</p>
      <h1>⭐⭐⭐⭐⭐ "The botanical gardens are free, beautiful year round, and a nice excursion for a lazy afternoon.
"</h1>
      <p>Ty Reed - Google</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="./assets/pics/photo-1560268863-28fed4e85b64-min.jpeg"
      alt="Third slide"
    />
    <Carousel.Caption id = "caption">
      <p>Sloss Furnace</p>
      <h1>"More than just an impressive place to walk around, an important part of Birmingham’s history is preserved in this space. Sloss is a place not to be missed."</h1>
      <p>Shannon Carden - Google</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      id = "burger"
      src="./assets/pics/photo-1476979735039-2fdea9e9e407-min.jpeg"
      alt="Third slide"
    />
    <Carousel.Caption id = "caption">
      <p>Red Mountain</p>
      <h1>Great place to see July 4th fireworks!</h1>
      <p>R L - Google</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      id = "burger"
      src="./assets/pics/bbma-1024x640 (1).jpg"
      alt="Third slide"
    />
    <Carousel.Caption id = "caption">
      <p>Birmingham Museum of Art</p>
      <h1>⭐⭐⭐⭐⭐ Huge collections of art from all over and from all time periods, from 4500 years ago to last year, from global artists to local artists.</h1>
      <p>Kayla A - Google</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      id = "burger"
      src="./assets/pics/photo-1503919005314-30d93d07d823-min.jpeg"
      alt="Third slide"
    />
    <Carousel.Caption id = "caption">
      <p>Birmingham Zoo</p>
      <h1>Great walking/running trail through the heart of Downtown Birmingham</h1>
      <p>Ami Measel - Google</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>
 <div className='resultsDiv'>
      {attractionIDs.map((attraction, index) => (
        <SingleAttraction attraction={attraction} key={uuid()} />
      ))}
    </div>
    </Fragment>
  );
};

interface AttractionsProps {}
export default Attractions;
