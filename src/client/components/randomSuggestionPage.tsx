import * as React from "react";
import ReactDOM from "react-dom";
import RandomRestaurants from "./randomRestaurants";
import RandomBars from "./randomBars";
import RandomAttractions from "./randomAtt";
import Card from 'react-bootstrap/Card';

const RandomSuggestionPage: React.FC = (props: RandomProps) => {

    return(
        <>
        <div id="Bodystuff" style={{ display: 'flex', flexDirection: 'row' }}>
        <RandomRestaurants/>
        <RandomBars/>
        <RandomAttractions/>
        </div>
        </>
    )

}

interface RandomProps {}

export default RandomSuggestionPage;