import * as React from "react";
import { iBars } from "../utils/types";
import SingleBar from "./singleBar";

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

  return barIDs.map((bar, index) => <SingleBar bar={bar} key={index} />);
};

interface BarsProps {}

export default Bars;
