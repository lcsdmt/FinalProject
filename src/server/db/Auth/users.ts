import { Query } from '../index';

const findOneByEmail = async (email:string) => Query(`SELECT * FROM users WHERE email = '${email}' LIMIT 1`);

const findOneById = async (id: number) => Query(`SELECT * FROM users WHERE id = ${id}`);

const insert = async (user:any) => Query(`INSERT INTO users (email, password, role) VALUES ?`, user);

export default {
    findOneByEmail,
    findOneById,
    insert
}