import express from 'express';
import {Signup, LogIn} from '../controller/Auth.js'

const router = express.Router();


router.post('/signup', Signup);
router.post('/login', LogIn);

export default router;