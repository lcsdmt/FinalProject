import * as mysql from "mysql";
import config from '../config'
import Restaurants from './Queries/restaurants';
import Bars from './Queries/bars';
import Attractions from './Queries/attractions';
import Users from './auth/users';
import AccessTokens from './auth/accesstokens';
import RestaurantFavorites from './restaurantfavorites';
import BarFavorites from './barfavorites';
import AttractionFavorites from './attractionfavorites';

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
  Users,
  AccessTokens,
  RestaurantFavorites,
  BarFavorites,
  AttractionFavorites
};
