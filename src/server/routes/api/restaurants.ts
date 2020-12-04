import * as express from 'express';
import db from '../../db';


const router = express.Router();

interface ReqUser extends express.Request {
    user: {
        role: string,
        email: string
        //commonly a user record from the database
    }
}

const isAdmin: express.RequestHandler = (req: ReqUser, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
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
            res.json((await db.Restaurants.findOneById(id))[0]);
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
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