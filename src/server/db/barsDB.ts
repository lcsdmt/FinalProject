import { Query } from './index';


const findOneById = async (id: any) => Query(`SELECT * FROM bars WHERE id = ${id} LIMIT 1`);

const allBars = async () => Query(`'SELECT * FROM bars`);

export default {

  findOneById, 
  allBars
}
