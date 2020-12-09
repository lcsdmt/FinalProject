import * as React from "react";
import { iBars } from "../utils/types";
import SingleBar from "./singleBar";
import uuid from "react-uuid";
import { getData } from "../requests/request";

const Bars: React.FC = (props: BarsProps) => {
  let dbBarsInfo = [];
  const [barIDs, setBarsInfo] = React.useState<iBars[]>([]);

  const fetchBars = async () => {
    let dbBars: any = [];
    let path = "/api/bars";
    await getData(path)
      .then((data) => {
        dbBars = data;
      })
      .catch((err) => console.error(err));
    dbBars.forEach((bar) =>
      dbBarsInfo.push({ barID: bar.place_id, description: bar.description })
    );
    setBarsInfo([...dbBarsInfo]);
  };
  React.useEffect(() => {
    fetchBars();
  }, []);
  return (
    <div className="resultsDiv">
      {barIDs.map((bar, index) => (
        <SingleBar bar={bar} key={uuid()} />
      ))}
    </div>
  );
};

interface BarsProps {}
export default Bars;
