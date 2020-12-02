import * as express from 'express';
import * as passport from 'passport';

import barRouter from '../../../routes'



const router = express.Router();


 
router.use('/bars', barRouter);




export default router;