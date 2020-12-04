import * as passport from 'passport';
import * as LocalStrategy from 'passport-local';

import { ComparePassword } from '../utility/security/passwords';
import db from '../db';
import { createParenthesizedType } from 'typescript';

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(new LocalStrategy.Strategy({
    usernameField: 'email',
    session: false
}, async (email, password, done) => {
    console.log("EMAIL", email);
    console.log("PASS", password);

    try {
        let [user]: any = await db.Users.findOneByEmail(email);
        // console.log("USER OBJ", user);
        // console.log("COMPARE PASSWORD", user.password);
        if (user && ComparePassword(password, user.password)) {
            console.log("YIPPEEE");
            done(null, user);
        } else {
            done(null, false);
        }
    } catch (e) {
        done(e)
    }
}))