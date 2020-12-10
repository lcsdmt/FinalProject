import { Query } from './index';



const findFavIdbyUserId = (userid: any) => Query(`call localhost.spBarFavs(${userid})`);

const getOne = (barid: any) => Query(`select bars.id, bars.name, bars.description from bars
join favorites on favorites.barsid = bars.id
where favorites.barsid = ${barid};
 `);

const deleteBarFavorite = (barsid: any) => Query(`delete from favorites WHERE barsid = ${barsid}`);

export default {
  findFavIdbyUserId,
  getOne,
  deleteBarFavorite
}