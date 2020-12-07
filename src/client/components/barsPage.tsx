import * as React from "react";
import { iBars } from "../utils/types";
import SingleBar from "./singleBar";
import uuid from "react-uuid";

const Bars: React.FC = (props: BarsProps) => {
  let dbBarsInfo = [];
  const [barIDs, setBarsInfo] = React.useState<iBars[]>([]);

  const fetchBars = async () => {
    try {
      const data = await fetch("/api/bars");
      const dbBars = await data.json();
      dbBars.forEach(bar => dbBarsInfo.push({barID: bar.place_id, description: bar.description}));
      setBarsInfo([...dbBarsInfo]);
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    fetchBars();
  }, []);

  return barIDs.map((bar, index) => <SingleBar bar={bar} key= {uuid()} />);
};

interface BarsProps {}

export default Bars;
