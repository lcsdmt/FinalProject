import * as React from "react";
import { iBars } from "../utils/types";
import SingleBar from "./singleBar";

const Bars: React.FC = (props: BarsProps) => {
  let dbBarsIDs = [];
  const [ids, setIDs] = React.useState<iBars[]>([]);

  const fetchBars = async () => {
    try {
      const data = await fetch("/api/bars");
      const dbBars = await data.json();

      dbBars.forEach(bar => dbBarsIDs.push(bar.place_id));
      setIDs([...dbBarsIDs]);
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    fetchBars();
  }, []);

  return ids.map((barID) => <SingleBar ID={barID} />);
};

interface BarsProps {}

export default Bars;
