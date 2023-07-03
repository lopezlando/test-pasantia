import { Router } from 'express';
import userController from '../controllers/user.controller.js';

const userRoutes = Router();``

// rutas
userRoutes.post('/authenticate', userController.authenticate);

userRoutes.post('/register', userController.register);

export default userRoutes;
