import express from 'express';
import { formLogin,formSignup,formPasswordRecovery } from '../controllers/userController.js'

//create app
const router = express.Router();

router.get('/login', formLogin);
router.get('/signup', formSignup);
router.get('/passwordRecovery', formPasswordRecovery);


export default router;