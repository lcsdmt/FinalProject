import * as express from 'express';
import db from '../../db'


const router = express.Router();

router.get('/:id?', async (req, res) => {
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

export default router;