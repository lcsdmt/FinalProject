import { Query } from './index';



const findFavIdbyUserId = (userid: any) => Query(`call localhost.spRestaurantFavs(${userid})`);

const getOne = (restaurantid: any) => Query(`select restaurants.id, restaurants.name from restaurants
join favorites on favorites.restaurantid = restaurants.id
where favorites.restaurantid = ${restaurantid};
 `);

const deleteRestaurantFavorite = (restaurantid: any) => Query(`delete from favorites WHERE restaurantid = ${restaurantid}`);

export default {
  findFavIdbyUserId,
  getOne,
  deleteRestaurantFavorite,
}