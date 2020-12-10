import React, { useEffect, useState, Fragment } from "react";
import { iRestaurants } from "../utils/types";
import SingleRestaurant from "./singleRestaurant";
import uuid from "react-uuid";
import { getData } from "../requests/request";
import Carousel from 'react-bootstrap/Carousel'

const Restaurants: React.FC = (props: RestaurantsProps) => {
  let dbRestaurantsInfo = [];
  const [restaurantIDs, setRestaurantsInfo] = React.useState<iRestaurants[]>(
    []
  );

  const fetchRestaurants = async () => {
    let dbRestaurants: any = [];
    let path = "/api/restaurants";
    await getData(path)
      .then((data) => {
        dbRestaurants = data;
      })
      .catch((err) => console.error(err));
    dbRestaurants.forEach((restaurant) =>
      dbRestaurantsInfo.push({
        restaurantID: restaurant.place_id,
        description: restaurant.description,
      })
    );
    setRestaurantsInfo([...dbRestaurantsInfo]);
  };
  React.useEffect(() => {
    fetchRestaurants();
  }, []);
  return (
    <Fragment>
      <div id = "carousel">
      <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 text-center img-fluid" 
      src="./assets/pics/photo-1414235077428-338989a2e8c0-min.jpeg"
      alt="First slide"
    />
    <Carousel.Caption id = "caption">
      <p>Yummefy</p>
      <h1>⭐⭐⭐⭐⭐ This place is amazing and I love the amazing vegan momos, a Thai Dish that is vegan too and have others to try.  I have done pick-up and the owner Sam is so nice, friendly and welcoming.</h1>
      <p>Samar Misra - Google</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="./assets/pics/photo-1526234362653-3b75a0c07438-min.jpeg"
      alt="Third slide"
    />
    <Carousel.Caption id = "caption"> 
    <p>Shu Shop</p>
      <h1>Everything was packed carefully and the instructions were easy to follow to recreate a dine-in experience</h1>
      <p>Reggie - Grubhub</p>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      id = "burger"
      src="./assets/pics/photo-1466978913421-dad2ebd01d17-min.jpeg"
      alt="Third slide"
    />
    <Carousel.Caption id = "caption">
      <p>Eugene's Hot Chicken</p>
      <h1>When you need to turn up the heat, Eugene’s is the place to go. </h1>
      <p>UptownBham.com</p>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      id = "burger"
      src="./assets/pics/photo-1484659619207-9165d119dafe-min.jpeg"
      alt="Third slide"
    />
    <Carousel.Caption id = "caption">
      <p>The Essential</p>
      <h1>Amazing downtown eatery! Not your typical brunch fare. This spot has an excellent menu with an option to fit every taste and budget.</h1>
      <p>Princess - Google</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      id = "burger"
      src="/assets/pics/photo-1522336572468-97b06e8ef143-min.jpeg"
      alt="Third slide"
    />
    <Carousel.Caption id = "caption">
      <p>Little Donkey Mexican Restuart</p>
      <h1>⭐⭐⭐⭐⭐ Happened in here at the right time. With Covid limited seating. We got right in, when we left there were at least 30 people waiting, socially distanced around the parking lot.</h1>
      <p>C Barnes - Google</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>
    <div className='resultsDiv'>
      {restaurantIDs.map((restaurant, index) => (
        <SingleRestaurant restaurant={restaurant} key={uuid()} />
      ))}
    </div>

    </Fragment>
  );
};

interface RestaurantsProps {}
export default Restaurants;
