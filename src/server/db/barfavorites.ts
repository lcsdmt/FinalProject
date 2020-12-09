import { Query } from './index';



const findFavIdbyUserId = (userid: any) => Query(`call spBarFavs(?)`, [userid]);

const getOne = (barsid: any) => Query(`select bars.id, bars.name from bars
join favorites on favorites.barsid = bars.id
where favorites.barsid = ${barsid};
 `);

 const deleteBarFavorite = (barsid: any) => Query(`delete from favorites WHERE barsid = ${barsid}`);

export default {
  findFavIdbyUserId,
  getOne,
  deleteBarFavorite
}