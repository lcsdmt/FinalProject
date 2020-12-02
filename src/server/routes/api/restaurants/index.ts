import * as express from 'express';
import * as passport from 'passport';

import restaurantRouter from '../../../routes';



const router = express.Router();


 
router.use('/restaurants', restaurantRouter);




export default router;