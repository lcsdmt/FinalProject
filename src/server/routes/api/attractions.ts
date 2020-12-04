import * as express from 'express';
import { RequestHandler } from 'express-serve-static-core';
import db from '../../db'

const router = express.Router();

interface ReqUser extends express.Request {
    user: {
        email: string,
        password: string,
        role: string,
        //commonly a user record from the database
    }
}

const isAdmin: RequestHandler = (req: ReqUser, res, next) => {
    //console.log("req.user", req)
    if (!req.user || req.user.role !== 'admin') {
        return res.sendStatus(401);
    } else {
        console.log("test")
        return next();
    }
};

router.get('/:id?', isAdmin, async (req, res, next) => {
    console.log('workswef23rf2q3q@@@@@@@', req.user);
    //isAdmin(req, res, next);
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