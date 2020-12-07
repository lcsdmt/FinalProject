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
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjMxLCJhY2Nlc3N0b2tlbmlkIjozMiwidW5pcXVlIjoiZGMxNjRlNTI3ZDZhNDcxYTNlZDIzNDhhODUzMjY3NTlhOWFlOTYwYTk4YWY2MDkzM2QxYTQ1ZTNlOTc3MjdlNCIsImlhdCI6MTYwNzM2Nzg1MH0.fcEwkexCgwdEAfBmNO1YVt_CtiU98SuMgUpk9bl8760",
        
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
