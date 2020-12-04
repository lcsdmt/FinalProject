import { Query } from './index';

const findOneById = async (id: any) => Query(`SELECT * FROM restaurants WHERE id = ${id} LIMIT 1`);


export const allRestaurants = async () => Query(`SELECT * from restaurants`);




export default {
  allRestaurants,
  findOneById,
}
