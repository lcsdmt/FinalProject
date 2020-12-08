import * as express from 'express';
import * as passport from 'passport';
import restaurantRouter from './restaurants';
import barRouter from './bars';
import attractionRouter from './attractions';
// import favoriteRouter from './favorites'

const router = express.Router();
router.use('/restaurants', restaurantRouter);
router.use('/bars', barRouter);
router.use('/attractions', attractionRouter);
// router.use('/favorites', favoriteRouter)


export default router;

