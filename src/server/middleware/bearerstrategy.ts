import * as passport from 'passport';
import * as BearerStrategy from 'passport-http-bearer';

import { ValidToken } from '../db/utility/security/tokens';
import db from '../db';

passport.use(new BearerStrategy.Strategy(async (token, done) => {
    try {
        let payload = await ValidToken(token);
        console.log("payload: ", payload);
        let [user] = await db.Users.findOneById(payload.userid)
        console.log("user from payload: ", user);
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        };
    } catch (e) {
        done(e)
    }
}));