import React, { useEffect, useState, Fragment } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { iBars } from "../utils/types";
import SingleBar from "./singleBar";

const Bars: React.FC = (props: BarsProps) => {
  let dbBarsInfo = [];
  const [barIDs, setBarsInfo] = React.useState<iBars[]>([]);

  const fetchBars = async () => {
    let dbBars: any = [];
    let path = "/api/bars";
    await getData(path)
      .then((data) => {
        dbBars = data;
      })
      .catch((err) => console.error(err));
    dbBars.forEach((bar) =>
      dbBarsInfo.push({ barID: bar.place_id, description: bar.description })
    );
    setBarsInfo([...dbBarsInfo]);
  };

  React.useEffect(() => {
    fetchBars();
  }, []);
  return (
    <Fragment>
       <div id = "carousel">
      <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 text-center img-fluid" 
     id = "burger"
      src="./assets/pics/2019AtomicCocktailsWEB-1012-min.jpg"
      alt="First slide"
    />
    <Carousel.Caption id = "caption">
    <p>Atomic Lounge</p>
      <h1>"Atomic is a regional nominee for Best American Cocktail Bar, an award honoring a bar for setting the highest standards in the industry and influencing cocktail trends with its menu, staff, and atmosphere."</h1>
      <p>Tales of the Cocktail - AL.com</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      id = "burger"
      src="./assets/pics/photo-1511795267602-0424436b99c5-min.jpeg"
      alt="Third slide"
    />
    <Carousel.Caption id = "caption">
    <p>The Collins</p>
      <h1>Very great spot. Drinks are excellent with a “trust your bartender” option. They have tons of great snacks options and a ten dollar cheese plate.</h1>
      <p>Maximilian Upp - Google</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      id = "burger"
      src="./assets/pics/photo-1508253730651-e5ace80a7025-min.jpeg"
      alt="Third slide"
    />
    <Carousel.Caption id = "caption">
    <p>Plum Bar</p>
      <h1>Small but very nice.  Drinks were very good.
Yes, I would recommend this place for a fun filled night with friends or family.</h1>
      <p>M Gilmore- Google</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      id = "burger"
      src="./assets/pics/photo-1514361892635-6b07e31e75f9-min.jpeg"
      alt="Third slide"
    />
    <Carousel.Caption id = "caption">
      <p>Paper Doll</p>
      

      <h1>  ⭐⭐⭐⭐ Came in here on a Friday night and immediately fell in love with the atmosphere! The vibe is unmatched and the decor has a nice relaxing feel to it. </h1>
      <p>Maximilian Upp - Restaurantji.com</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      id = "burger"
      src="./assets/pics/pilcrow-min.jpg"
      alt="Third slide"
    />
    <Carousel.Caption id = "caption">
      <p>Pilcrow Cocktail Cellar</p>
      <h1>⭐⭐⭐⭐⭐ By far my favorite cocktail bar in town. Great atmosphere, unique drinks, quality service, and friendly staff. Yates is one of the best bartenders I’ve encountered in town!</h1>
      <p>Dalton Bradshaw - Google</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>

    <div className='resultsDiv'>
      {barIDs.map((bar, index) => (
        <SingleBar bar={bar} key={uuid()} />
      ))}
    </div>
    </Fragment>
  );
};

interface BarsProps {}
export default Bars;
