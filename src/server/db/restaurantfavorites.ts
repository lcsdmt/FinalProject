import { Query } from './index';
import restaurants from './restaurants';


//Returns empty object //
const findFavIdbyUserId = (userid: any) => Query(`call spRestaurantFavs(?)`, [userid]);


const getOne = (restaurantid: any) => Query(`select restaurants.id, restaurants.name from restaurants
join favorites on favorites.restaurantid = restaurants.id
where favorites.restaurantid = ${restaurantid};
 `);

/* const addRestaurantFavorites = (restaurantsid: any, userid: any) => Query(`INSERT INTO favorites (restaurantid, userid) VALUES (?, ?)`, [restaurantsid, userid]);

*/

const deleteRestaurantFavorite = (restaurantid: any) => Query(`delete from favorites WHERE restaurantid = ${restaurantid}`);

export default {
  findFavIdbyUserId,
  getOne,
  deleteRestaurantFavorite,
 // addRestaurantFavorites //
}