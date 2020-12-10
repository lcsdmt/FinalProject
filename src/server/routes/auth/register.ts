import * as express from 'express';
import db from '../../db'
import { HashPassword } from '../../utility/security/passwords'
import { CreateToken } from '../../utility/security/tokens'

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        let user = req.body;
        user.password = HashPassword(req.body.password);
        let result = await db.Users.insert(user.email, user.password, user.role);
        let token = await CreateToken({ userid: result.insertId });
        res.json({
            token,
            role: 'guest',
            userid: result.insertId
        })
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

export default router;