import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./components/homePage";
import Restaurants from "./components/restaurantsPage";
import Bars from "./components/barsPage";
import Attractions from "./components/attractionsPage";
import User from "./components/userPage";
import Signup from "./components/userSignUp";
import UserLogin from "./components/login";
import RandomSuggestionPage from "./components/randomSuggestionPage";

const App: React.FC<IAppProps> = () => {
  return (
    <Router>
      <NavBar/>
      <Switch> 
        <Route exact path="/" component={Home} />
        <Route exact path="/restaurants" component={Restaurants} />
        <Route exact path="/bars" component={Bars} />
        <Route exact path="/attractions" component={Attractions} />
        <Route exact path='/findsomethingnew' component={RandomSuggestionPage} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/login" component={UserLogin} />
        <Route exact path="/user/:id" component={User} />
        <Route exact path="/findsomethingnew" component={RandomSuggestionPage} />
      </Switch>
    </Router>
  );
};

interface IAppProps {}

export default App;
