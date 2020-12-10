import { Query } from './index';


const findFavIdbyUserId = (userid: any) => Query(`call spAttractionsFavs(?)`, [userid]);

const getOne = (attractionsid: any) => Query(`select attractions.id, attractions.name, attractions.description
from attractions
join favorites on favorites.attractionsid = attractions.id
where favorites.attractionsid = ${attractionsid};
 `);

 const insertAttractionFavorite = async (userid: any, attractionsid: any) => Query(`INSERT INTO favorites (userid, attractionsid) VALUES (${userid}, ${attractionsid})`);

 const deleteAttractionFavorite = (attractionsid: any) => Query(`delete from favorites WHERE attractionsid = ${attractionsid}`);

export default {
  findFavIdbyUserId,
  getOne,
  deleteAttractionFavorite,
  insertAttractionFavorite
}