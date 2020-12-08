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

// const isAdmin: express.RequestHandler = (req: ReqUser, res, next) => {
//     if (!req.user ||req.user.role !== 'guest') {
//         return res.status(401).send("Oops, looks like you'll need to login to proceed!");
//     } else {
//         return next();
//     }
// };

router.get('/:id?', async (req, res) => {
    console.log('works')
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
