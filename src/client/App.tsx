import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import Restaurants from "./components/restaurantsPage"


const App: React.FC<IAppProps> = () => {
	return (
		<Router>
			
			<Switch>
				<Route exact path="/" component={Restaurants} />
				{/* <Route exact path="/blog/:id/edit" component={EditBlog} />
				<Route exact path="/blog/add" component={AddNewBlog} /> */}
			</Switch>
		</Router>
	)
};

interface IAppProps { }

export default App