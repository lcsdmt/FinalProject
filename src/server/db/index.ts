import * as mysql from "mysql";
import config from "../config"


export const Connection = mysql.createConnection(config.mysql);

// dont have to put async before " (query..." because already returning promise
export const Query = (query: string, values?: Array<string | number>) => {
  return new Promise<Array<any>>((resolve, reject) => {
    Connection.query(query, values, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

export default {
  Query
}
