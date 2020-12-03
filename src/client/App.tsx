import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Restaurants from "./components/restaurantsPage";
import Home from "./components/homePage";
import Bars from "./components/barsPage";
// import Attractions from "./components/attractionsPage"

const App: React.FC<IAppProps> = () => {
  return (
    <Router>
        <div><h1><u>LOCAL HOST</u></h1></div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/restaurants" component={Restaurants} />
        <Route exact path="/bars" component={Bars} />
        {/* <Route exact path="/" component={Attractions} /> */}
      </Switch>
    </Router>
  );
};

interface IAppProps {}

export default App;
