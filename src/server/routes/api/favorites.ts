import * as express from 'express';
import db from '../../db';

const router = express.Router();

interface ReqUser extends express.Request {
    user: {
        role: string,
        email: string
    }
}

router.get('/:id?', async (req, res) => {
    let id = req.params.id
    if (id) {
        try {
            res.json((await db.Bars.findOneById(id))[0]);
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    } else {
        try {
            res.json(await db.Bars.allBars())
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    }
});
export default router
