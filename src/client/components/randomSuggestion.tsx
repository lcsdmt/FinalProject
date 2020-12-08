import * as React from "react";
// import React, { useState } from "react";
import ReactDOM from "react-dom";
import { iRestaurants, iBars, iAttractions } from "../utils/types";

const RandomRec: React.FC = (props: RandomProps) => {
  let restaurantsList = [];
  let barsList = [];
  let attractionsList = [];
  const [restaurants, setRestaurants] = React.useState<iRestaurants[]>([]);
  const [bars, setBars] = React.useState<iBars[]>([]);
  const [attractions, setAttractions] = React.useState<iAttractions[]>([]);

  const fetchRestaurants = async () => {
    try {
      const data = await fetch("/api/restaurants", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjI0LCJhY2Nlc3N0b2tlbmlkIjoyOSwidW5pcXVlIjoiMDQ4NGM1N2ViZjI3MTNmOTdhN2E4M2Q0NzUyZjY4YTRkYTlkN2U5ODJhNTA5OGY2YTJmY2M1OTE1ODUyZmYyMyIsImlhdCI6MTYwNzM3OTcwMX0.PFvaoArpyPgia8DoCDesvMKY_v0r9cxfX6ZLGTUmo_k",
          "Access-Control-Allow-Origin": "localhost:3000",
        },
      });
      const restaurantDB = await data.json();
      restaurantDB.forEach((restaurant) => {
        const url = "https://cors-anywhere.herokuapp.com/";
        fetch(
          url +
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${restaurant.place_id}&key=AIzaSyAntdFxOZs3uD0WwPVp4HUb4MZkXrgSnOA`
        )
          .then((res) => res.json())
          .then((data) => {
            let websiteRestaurant = data.result;
            restaurantsList.push({
              restaurantID: restaurant.place_id,
              description: restaurant.description,
              name: restaurant.name,
              website: websiteRestaurant.website,
            });
            
          });
      });
      // let randomNum = Math.floor(Math.random() * restaurantsList.length - 1)
     
      setRestaurants(restaurantsList);
    } catch (err) {
      console.error(err);
    }
  };

  const randomRestaurants = (e) => {
    const len = restaurantsList.length;
    setRestaurants(restaurants[2]);
  };

//   const fetchBars = async () => {
//     try {
//       const data = await fetch("/api/bars", {
//         headers: {
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjI0LCJhY2Nlc3N0b2tlbmlkIjoyOSwidW5pcXVlIjoiMDQ4NGM1N2ViZjI3MTNmOTdhN2E4M2Q0NzUyZjY4YTRkYTlkN2U5ODJhNTA5OGY2YTJmY2M1OTE1ODUyZmYyMyIsImlhdCI6MTYwNzM3OTcwMX0.PFvaoArpyPgia8DoCDesvMKY_v0r9cxfX6ZLGTUmo_k",
//           "Access-Control-Allow-Origin": "localhost:3000",
//         },
//       });
//       const barsDB = await data.json();
//       barsDB.forEach((bar) => {
//         const url = "https://cors-anywhere.herokuapp.com/";
//         fetch(
//           url +
//             `https://maps.googleapis.com/maps/api/place/details/json?place_id=${bar.place_id}&key=AIzaSyAntdFxOZs3uD0WwPVp4HUb4MZkXrgSnOA`
//         )
//           .then((res) => res.json())
//           .then((data) => {
//             let websiteBar = data.result;
//             console.log(websiteBar);
//             if (websiteBar.website == !undefined) {
//               barsList.push({
//                 barID: bar.place_id,
//                 description: bar.description,
//                 name: bar.name,
//                 website: websiteBar.website,
//               });
//             } else {
//                 () => fetchBars()
//             }
//           });
//       });
//       //   barsDB.forEach((bar) =>
//       //     barsList.push({
//       //       barID: bar.place_id,
//       //       description: bar.description,
//       //       name: bar.name,
//       //     })
//       //   );
//       setBars([...barsList]);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const fetchAttractions = async () => {
//     try {
//       const data = await fetch("/api/attractions", {
//         headers: {
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjI0LCJhY2Nlc3N0b2tlbmlkIjoyOSwidW5pcXVlIjoiMDQ4NGM1N2ViZjI3MTNmOTdhN2E4M2Q0NzUyZjY4YTRkYTlkN2U5ODJhNTA5OGY2YTJmY2M1OTE1ODUyZmYyMyIsImlhdCI6MTYwNzM3OTcwMX0.PFvaoArpyPgia8DoCDesvMKY_v0r9cxfX6ZLGTUmo_k",
//           "Access-Control-Allow-Origin": "localhost:3000",
//         },
//       });
//       const attractionsDB = await data.json();
//       attractionsDB.forEach((attraction) => {
//         const url = "https://cors-anywhere.herokuapp.com/";
//         fetch(
//           url +
//             `https://maps.googleapis.com/maps/api/place/details/json?place_id=${attraction.place_id}&key=AIzaSyAntdFxOZs3uD0WwPVp4HUb4MZkXrgSnOA`
//         )
//           .then((res) => res.json())
//           .then((data) => {
//             let websiteAttraction = data.result;
//             attractionsList.push({
//               attractionID: attraction.place_id,
//               description: attraction.description,
//               name: attraction.name,
//               website: websiteAttraction.website,
//             });
//           });
//       });
//       setAttractions([...attractionsList]);
//       console.log(attractionsList);
//     } catch (err) {
//       console.error(err);
//     }
//   };

  React.useEffect(() => {
    fetchRestaurants();
    // fetchBars();
    // fetchAttractions();
  }, []);

    // const randomRestaurants = (e) => {
    //   const len = restaurantsList.length;
    //   setRestaurants(Math.floor(Math.random() * len));
    // };
//   const randomBars = (e) => {
//     const len = barsList.length;
//     setBars(Math.floor(Math.random() * len));
//   };
//   const randomAttractions = (e) => {
//     const len = attractionsList.length;
//     setAttractions(Math.floor(Math.random() * len));
//   };

  return (
    <>
      <h2>hey</h2>
      <button onClick={() => {randomRestaurants}}>woo</button>
    </>
  );
};
interface RandomProps {}

export default RandomRec;
