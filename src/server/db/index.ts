import * as mysql from "mysql";
import config from '../config'
import Restaurants from './restaurants';
import Bars from './bars';
import Attractions from './attractions'
import RestaurantTags from './restaurantfavorites'
import Users from './auth/users';
import AccessTokens from './auth/accesstokens';
import RestaurantFavorites from './restaurantfavorites';

export const pool = mysql.createPool(config.mysql);

export const Query = (query: string, values?: Array<string | number>) => {
  return new Promise<Array<any>>((resolve, reject) => {
  pool.query(query, values, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};
export default {
 Restaurants,
  Bars,
  Attractions,
  RestaurantTags,
  Users,
  AccessTokens,
  RestaurantFavorites
};