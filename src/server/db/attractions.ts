import { Query } from './index';


const findOneById = async (id: any) => Query(`SELECT * FROM attractions WHERE id = ${id} LIMIT 1`);

const allAttractions = async () => Query(`SELECT * FROM attractions`);

export default {

  findOneById, 
  allAttractions
}