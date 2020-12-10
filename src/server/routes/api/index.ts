import * as express from 'express';
import * as passport from 'passport';

import restaurantRouter from './restaurants';
import barRouter from './bars'
import attractionRouter from './attractions'
import restaurantFavoritesRouter from './favoriteRestaurants'
import barFavoritesRouter from './favoriteBars'
import attractionFavoritesRouter from './favoriteAttractions'


const router = express.Router();


router.use('/restaurants', restaurantRouter);
router.use('/bars', barRouter);
router.use('/attractions', attractionRouter);
router.use('/favoritebars', barFavoritesRouter);
router.use('/favoriterestaurants', restaurantFavoritesRouter);
router.use('/favoriteattractions', attractionFavoritesRouter);


export default router;