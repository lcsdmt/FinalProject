import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/navBar"
import Home from "./components/homePage";
import Restaurants from "./components/restaurantsPage";
import Bars from "./components/barsPage";
import Attractions from "./components/attractionsPage"

const App: React.FC<IAppProps> = () => {
  return (
    <Router>
      {/* <NavBar/> */}
        <div><h1><u>LOCAL HOST</u></h1></div>
        <Link to={`/`}>
        <button className="btn btn-sm btn-outline-info rounded-pill">
          Home
        </button>
      </Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/restaurants" component={Restaurants} />
        <Route exact path="/bars" component={Bars} />
        <Route exact path="/attractions" component={Attractions} />
      </Switch>
    </Router>
  );
};

interface IAppProps {}

export default App;
