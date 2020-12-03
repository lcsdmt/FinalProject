import * as express from 'express';
import db from '../../db'


const router = express.Router();

const isAdmin: express.RequestHandler = (req, res, next) => {
    if (req.user || req.user.role !== 'admin') {
        return res.sendStatus(401);
    } else {
        return next();
    }
};

router.get('/:id?', isAdmin, async (req, res) => {
    console.log('works')
    let id = req.params.id
    if (id) {
        try {
            res.json((await db.Attractions.findOneById(id))[0]);
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    } else {
        try {
            res.json(await db.Attractions.allAttractions())
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    }
});

export default router