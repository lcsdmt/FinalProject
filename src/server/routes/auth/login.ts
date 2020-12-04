import * as express from 'express';
import * as passport from 'passport';

import { CreateToken } from '../../utility/security/tokens';

const router = express.Router();
interface ReqUser extends express.Request {
    user: {
        role: string,
        email: string,
        id: any
        //commonly a user record from the database
    }
};

router.post('/', passport.authenticate('local'), async (req: ReqUser, res, next) => {
    console.log("REQ USER", req.user);
    try {
        let token = await CreateToken({ userid: req.user.id });
        console.log("token", token)
        console.log("user", req.user)
        res.json({
            token,
            role: req.user.role,
            userid: req.user.id
        })
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;