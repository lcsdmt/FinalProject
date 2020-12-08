import { Query } from '../index';

const findOneByEmail = async (email: string) => Query(`SELECT * FROM users WHERE email = '${email}' LIMIT 1`);

const findOneById = async (id: any) => Query(`SELECT * FROM users WHERE id = ${id}`);

const updateEmail = async (email: string) => Query(`UPDATE users SET email = ? WHERE id = ?`, [email]);

const deleteUser = async (id: any) => Query(`DELETE FROM users WHERE id = ${id}`)

const updatePassword = async (password: string) => Query(`UPDATE users SET password = ? WHERE id = ?`, [password]);

const insert = async (email: string, password: string, role: string) => Query(`INSERT INTO users (email, password, role) VALUES (?,?,?)`, [email, password, role='guest'] );


export default {
    findOneByEmail,
    findOneById,
    insert,
    updateEmail,
    deleteUser,
    updatePassword
}
