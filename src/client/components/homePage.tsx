import * as React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = (props: HomeProps) => {
  return (
    <div>
      <div className="text-center"><p>MISSION STATMENT - find better non bootstrap styles for buttons and background</p></div>
      <div className="d-flex justify-content-around">
        <Link to={`/restaurants`}>
          <button className="btn btn-sm btn-outline-info rounded-pill">
            Restaurants
          </button>
        </Link>
        <Link to={`/bars`}>
          <button className="btn btn-sm btn-outline-info rounded-pill">
            Bars
          </button>
        </Link>
        <Link to={`/attractions`}>
          <button className="btn btn-sm btn-outline-info rounded-pill">
            Attractions
          </button>
        </Link>
      </div>
    </div>
  );
};

interface HomeProps {}

export default Home;
