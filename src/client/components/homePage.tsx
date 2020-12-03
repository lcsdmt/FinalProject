import * as React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = (props: HomeProps) => {
  return (
    <div className="container">
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
  );
};

interface HomeProps {}

export default Home;
