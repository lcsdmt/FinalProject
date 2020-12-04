import { Query } from './index';


const oneRestaurantTag = (restaurantsid: any) => Query(`call spRestaurantTags(?)`, [restaurantsid]);

export default {
  oneRestaurantTag,
}