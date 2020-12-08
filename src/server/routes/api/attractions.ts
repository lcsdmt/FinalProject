import * as express from 'express';
import { RequestHandler } from 'express-serve-static-core';
import db from '../../db'

const router = express.Router();

interface ReqUser extends express.Request {
    user: {
        email: string,
        password: string,
        role: string,
    }
}

const isAdmin: RequestHandler = (req: ReqUser, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        return res.status(401).send("Oops, looks like you'll need to login to proceed!");
    } else {
        console.log("test")
        return next();
    }
};
//             ADD isAdmin before the async here, and for bars and Restaurants as well
router.get('/:id?', isAdmin, async (req, res, next) => {
    console.log('workswef23rf2q3q@@@@@@@', req.user);
    let id = req.params.id
    if (id) {
        try {
            res.json((await db.Attractions.findOneById(id))[0]);
        } catch (err) {
            console.log(err);
            res.send("Oops, looks like you'll need to login to proceed!").status(500);
        }
    } else {
        try {
            res.json(await db.Attractions.allAttractions())
        } catch (err) {
            console.log(err);
            res.send("Oops, looks like you'll need to login to proceed!").status(500);
        }
    }
});

export default router
