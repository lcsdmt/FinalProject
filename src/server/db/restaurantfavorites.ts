import { Query } from './index';



const findFavIdbyUserId = (userid: any) => Query(`call RestaurantFavs(?)`, [userid]);

const getOne = (restaurantid: any) => Query(`select restaurants.id, restaurants.name from restaurants
join favorites on favorites.restaurantid = restaurants.id
where favorites.restaurantid = ${restaurantid};
 `);

export default {
  findFavIdbyUserId,
  getOne
}