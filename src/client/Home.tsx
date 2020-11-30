import * as React from "react";

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
	  name: null,
	  data: []
    };
  }

  async componentDidMount() {
    try {
		const url = 'https://cors-anywhere.herokuapp.com/'
		fetch(url + 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=33.543682, -86.779633&radius=10000&type=restaurant&keyword=restaurant&key=AIzaSyAntdFxOZs3uD0WwPVp4HUb4MZkXrgSnOA')
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch(err => console.error(err));

		// fetch("https://https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=restaurant&key=AIzaSyAntdFxOZs3uD0WwPVp4HUb4MZkXrgSnOA")
		// .then(res => res.json())
		// .then(fetch => this.setState({ fetch: fetch }))
		// .catch(err => console.log(err));
	

    //   var service = new google.maps.places.PlacesService(
    //     document.getElementById("map")
    //   );
    //   service.getDetails(
    //     {
    //       placeId: "ChIJe7GI7E0QiYgRxQMp2_VSJug",
    //     },
    //     function (place, status) {
    //       console.log("Place details:", place);
    //     }
    //   )
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <main className="container my-5">
        <h1 className="text-primary text-center">Hello {this.state.name}!</h1>
      </main>
    );
  }
}

export interface IAppProps {}

export interface IAppState {
  name: string;
}

export default App;

//
// const App = (props: AppProps) => {
// 	const [greeting, setGreeting] = React.useState<string>('');

// 	React.useEffect(() => {
// 		(async () => {
// 			try {
// 				const res = await fetch('/api/hello');
// 				const greeting = await res.json();
// 				setGreeting(greeting);
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		})();
// 	}, []);

// 	return (
// 		<div className="min-vh-100 d-flex justify-content-center align-items-center">
// 			<h1 className="display-1">Hello {greeting}!</h1>
// 		</div>
// 	);
// };

// interface AppProps {}

// export default App;
