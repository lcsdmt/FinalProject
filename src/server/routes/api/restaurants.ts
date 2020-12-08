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
            res.json((await db.Restaurants.findOneById(id))[0]);
        } catch (err) {
            console.log(err);
            res.send("Oops, Looks like you'll need to register an account to proceed!").status(500);
        }
    } else {
        try {
            res.json(await db.Restaurants.allRestaurants())
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    }
});

export default router
