import * as express from 'express';
import * as passport from 'passport';
import loginRouter from './login';

const router = express.Router();

router.use('/login', loginRouter);

export default router;