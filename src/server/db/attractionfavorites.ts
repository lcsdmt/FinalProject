import { Query } from './index';



const findFavIdbyUserId = (userid: any) => Query(`call spAttractionsFavs(?)`, [userid]);

const getOne = (attractionsid: any) => Query(`select attractions.id, attractions.name from attractions
join favorites on favorites.attractionsid = attractions.id
where favorites.attractionsid = ${attractionsid};
 `);

export default {
  findFavIdbyUserId,
  getOne
}