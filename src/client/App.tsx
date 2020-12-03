import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Restaurants from "./components/restaurantsPage";
// import Home from "./components/homePage";
import Bars from "./components/barsPage";
// import Attractions from "./components/attractionsPage"

const App: React.FC<IAppProps> = () => {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" component={Restaurants} />
        {/* <Route exact path="/" component={Bars} /> */}
        {/* <Route exact path="/" component={Attractions} /> */}
      </Switch>
    </Router>
  );
};

interface IAppProps {}

export default App;
