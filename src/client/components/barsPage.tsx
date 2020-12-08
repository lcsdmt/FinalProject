import * as React from "react";
import { iBars } from "../utils/types";
import SingleBar from "./singleBar";
import uuid from "react-uuid";

const Bars: React.FC = (props: BarsProps) => {
  let dbBarsInfo = [];
  const [barIDs, setBarsInfo] = React.useState<iBars[]>([]);

  const fetchBars = async () => {
    try {
      const data = await fetch("/api/bars", {
        headers:{
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjI0LCJhY2Nlc3N0b2tlbmlkIjoyOSwidW5pcXVlIjoiMDQ4NGM1N2ViZjI3MTNmOTdhN2E4M2Q0NzUyZjY4YTRkYTlkN2U5ODJhNTA5OGY2YTJmY2M1OTE1ODUyZmYyMyIsImlhdCI6MTYwNzM3OTcwMX0.PFvaoArpyPgia8DoCDesvMKY_v0r9cxfX6ZLGTUmo_k",
        
          "Access-Control-Allow-Origin": "localhost:3000"
        }
      });
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