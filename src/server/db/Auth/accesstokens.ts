import { Query } from '../index';

const findOne = async (id: number, token: string) => Query(`SELECT * FROM tokens WHERE ID = ${id} AND token = '${token}'`);

const insert = async (userid: number) => Query(`INSERT INTO tokens (userid) VALUES (${userid})`);

const update = async (id: number, token: string) => Query(`UPDATE tokens SET token = '${token}' WHERE id = ${id}'`);

export default {
    findOne,
    insert,
    update
}