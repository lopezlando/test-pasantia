import userRoutes from './user.routes.js';
import { Router } from 'express';

const router = Router();

//Rutas por coleccion
router.use('/users', userRoutes);

export default router;