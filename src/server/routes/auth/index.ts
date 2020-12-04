import * as express from 'express';
import * as passport from 'passport';
import loginRouter from './login';
import registerRouter from './register';

const router = express.Router();

router.use('/login', loginRouter);
router.use('/register', registerRouter);

export default router;