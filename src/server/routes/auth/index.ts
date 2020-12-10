import * as express from 'express';
import * as passport from 'passport';
import loginRouter from './login';
import registerRouter from './register';
import userRouter from '../auth/users'
import apiRouter from '../api'

const router = express.Router();

router.use('/login', loginRouter);
router.use('/register', registerRouter);
router.use('/users', userRouter);

export default router;