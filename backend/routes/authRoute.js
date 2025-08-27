import express from 'express';
import { adminLogin, googleLogin, Login, Logout, Register } from '../controller/authController.js';

const authRoute = express.Router();

authRoute.post('/register', Register);
authRoute.post('/login', Login);
authRoute.get('/logout', Logout);
authRoute.post('/googlelogin', googleLogin);
authRoute.post('/adminlogin', adminLogin);

export default authRoute;