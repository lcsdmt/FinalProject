import * as express from 'express';
import * as passport from 'passport';

import restaurantRouter from './api/restaurants'
import barRouter from './api/bars'
import attractionRouter from './api/attractions'
import authRouter from '../routes/auth'
import apiRouter from './api'

const router = express.Router();

router.use((req, res, next) => {
    passport.authenticate('bearer', { session: false }, (err, user, info) => {
        if (user) req.user = user;
        return next();
    }) (req, res, next);
});


router.use('/auth', authRouter);
router.use('/api', apiRouter);
// router.use('/restaurants', restaurantRouter);
// router.use('/bars', barRouter);
// router.use('/attractions', attractionRouter);
console.log("test", barRouter)
export default router;