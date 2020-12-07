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
    if (!req.user || req.user.role !== 'guest') {
        return res.send("Oops, Looks like you'll need to register an account to proceed!").status(500);
    } else {
        return next();
    }
};

router.get('/:id?', isAdmin, async (req, res) => {
    console.log('works')
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
