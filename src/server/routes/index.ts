import * as express from 'express';
import * as passport from 'passport';


import authRouter from './auth';
import apiRouter from './api';

const router = express.Router();

router.use((req, res, next) => {
    passport.authenticate('bearer', { session: false }, (err, user, info) => {
        if (user) req.user = user;
        return next();
    })(req, res, next);
});

router.use('/auth', authRouter);
router.use('/api', apiRouter);

export default router;