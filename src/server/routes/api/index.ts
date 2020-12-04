import * as express from 'express';
import * as passport from 'passport';

import restaurantRouter from './restaurants';
import barRouter from './bars'
import attractionRouter from './attractions'



const router = express.Router();
 
router.use('/restaurants', restaurantRouter);
router.use('/bars', barRouter);
router.use('/attractions', attractionRouter);


export default router;