import * as React from "react";
import { iRestaurants } from "../utils/types";

// class App extends React.Component<IAppProps, IAppState> {
//   constructor(props: IAppProps) {
//     super(props);
//     this.state = {
// 	  name: null,
// 	  data: []
//     };
//   }

//   async componentDidMount() {
//     try {
// 		const url = 'https://cors-anywhere.herokuapp.com/'
// 		fetch(url + 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=33.543682, -86.779633&radius=32187&type=restaurant&keyword=restaurant&key=AIzaSyAntdFxOZs3uD0WwPVp4HUb4MZkXrgSnOA')
//         .then((resp) => {
//           return resp.json();
//         })
//         .then((data) => {
//           console.log(data);
//         })
//         .catch(err => console.error(err));

//     //   var service = new google.maps.places.PlacesService(
//     //     document.getElementById("map")
//     //   );
//     //   service.getDetails(
//     //     {
//     //       placeId: "ChIJe7GI7E0QiYgRxQMp2_VSJug",
//     //     },
//     //     function (place, status) {
//     //       console.log("Place details:", place);
//     //     }
//     //   )
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   render() {
//     return (
//       <main className="container my-5">
//         <h1 className="text-primary text-center">Hello {this.state.name}!</h1>
//       </main>
//     );
//   }
// }

// export interface IAppProps {}

// export interface IAppState {
//   name: string;
// }

// export default App;

const Restaurants: React.FC = (props: RestaurantsProps) => {
  const [restaurants, setRestaurants] = React.useState<iRestaurants[]>([]);

  React.useEffect(() => {
    (async () => {
      let placeIDsArr = [
        "ChIJaznSXhcbiYgR3iA_BDfkHcQ",
        "ChIJjexI31UaiYgRgzgZkITSXGE",
        "ChIJN_ULuJIaiYgRrrw0xTzkqU4",
        "ChIJN_ULuJIaiYgRrrw0xTzkqU4",
      ];
      // placeIDsArr.forEach(element =>  
      try {
        // const places = await fetch('/api/restaurants/')
        // console.log(places)
        
        const url = "https://cors-anywhere.herokuapp.com/";
        fetch(
          url +
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${element}&key=AIzaSyAntdFxOZs3uD0WwPVp4HUb4MZkXrgSnOA`
        )
          .then((resp) => {
            return resp.json();
          })
          .then((data) => {
            console.log(data.results);
            setRestaurants(data.results);
          })
          .catch((err) => console.error(err));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return restaurants.map((restaurant, index) => {
    return (
      <div
        key={index}
        className="min-vh-100 d-flex justify-content-center align-items-center"
      >
        <h4 className="display-1">Hello {restaurant.name}!</h4>
        <p>{restaurant.formatted_phone_number}!</p>
        <p>{restaurant.formatted_address}!</p>
        <p>{restaurant.url}!</p>
      </div>
    );
  });
};

interface RestaurantsProps {}

export default Restaurants;
