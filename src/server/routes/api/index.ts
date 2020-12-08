import * as express from 'express';
import * as passport from 'passport';

import restaurantRouter from './restaurants';
import barRouter from './bars'
import attractionRouter from './attractions'
import userRouter from './users'


const router = express.Router();
 
router.use('/restaurants', restaurantRouter);
router.use('/bars', barRouter);
router.use('/attractions', attractionRouter);
router.use('/users', userRouter);


export default router;