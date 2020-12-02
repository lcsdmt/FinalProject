import * as express from 'express';
// import * as passport from 'passport';

import apiRouter from './routes'

const router = express.Router();
 
router.use('/api', apiRouter);

export default router;