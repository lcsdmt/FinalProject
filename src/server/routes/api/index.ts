import * as express from 'express';
import * as passport from 'passport';

import restaurantRouter from './restaurants';
import barRouter from './bars'
import attractionRouter from './attractions'
import restaurantFavortiesRouter from './favoriteRestaurants'
import barFavortiesRouter from './favoriteBars'
import attractionFavortiesRouter from './favoriteAttractions'

const router = express.Router();
 
router.use('/restaurants', restaurantRouter);
router.use('/bars', barRouter);
router.use('/attractions', attractionRouter);
router.use('/favoriterestaurants', restaurantFavortiesRouter);
router.use('/favoritebars', barFavortiesRouter);
router.use('/favoriteattractions', attractionFavortiesRouter);

export default router;