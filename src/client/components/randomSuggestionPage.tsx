import React, { useEffect, useState, Fragment } from "react";
import ReactDOM from "react-dom";
import RandomRestaurants from "./randomRestaurants";
import RandomBars from "./randomBars";
import RandomAttractions from "./randomAtt";
import Jumbotron from 'react-bootstrap/Jumbotron'

const RandomSuggestionPage: React.FC = (props: RandomProps) => {

    return(
        <>
        <Fragment>
        <div className="jumbotron jumbotron-fluid" id = "jumbotron" style={{ color: "silver", backgroundColor: "#202020"}}>
  <div className="container">
    <h1 className="display-4"><strong>Lets Play a Game...</strong></h1>
    <p className="lead">Stuck on what to eat for dinner? Your friend cannot choose? Feeling adventerous? Well lets have some fun. Click one of the buttons below and let fate choose your plans for you!</p>
  </div>
  </div>
</Fragment>
        <div id="Bodystuff" style={{ display: 'flex', flexDirection: 'row' }} className="d-flex justify-content-around">
        <RandomRestaurants/>
        <RandomBars/>
        <RandomAttractions/>
        </div>
        </>
    )

}

interface RandomProps {}

export default RandomSuggestionPage;