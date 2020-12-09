import * as React from "react";
import ReactDOM from "react-dom";
import RandomRestaurants from "./randomRestaurants";
import RandomBars from "./randomBars";
import RandomAttractions from "./randomAtt";


const RandomSuggestionPage: React.FC = (props: RandomProps) => {

    return(
        <>
        <div id="Bodystuff" style={{ display: 'flex', flexDirection: 'row' }} className="d-flex justify-content-around align-items-center">
        <RandomRestaurants/>
        <RandomBars/>
        <RandomAttractions/>
        </div>
        </>
    )

}

interface RandomProps {}

export default RandomSuggestionPage;